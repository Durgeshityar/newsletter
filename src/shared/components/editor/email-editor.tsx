/* trunk-ignore-all(prettier) */
'use client'
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor'
import { useEffect, useRef, useState } from 'react'
import { DefaultJsonData } from '@/assets/mails/default'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
import { saveEmail } from '@/actions/save-email'
import toast from 'react-hot-toast'

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState(false)
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData)
  const { user } = useUser()
  const emailEditorRef = useRef<EditorRef>(null)
  const history = useRouter()

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data
      setJsonData(design)
    })
  }

  const saveDraft = () => {
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml(async (data) => {
      const { design } = data
      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        newsLetterOwnerId: user?.id!,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }).then((res: any) => {
        toast.success(res.message)
        history.push('/dashboard/write')
      })
    })
  }

  const onReady: EmailEditorProps['onReady'] = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const unlayer: any = emailEditorRef.current?.editor
    unlayer.loadDesign(jsonData)
  }

  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight={'80vh'}
            ref={emailEditorRef}
            onReady={onReady}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3 ">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
              onClick={saveDraft}
            >
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Emaileditor
