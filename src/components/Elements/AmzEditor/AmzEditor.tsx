import { Editor, IAllProps } from '@tinymce/tinymce-react'
import React from 'react'

export type AmzEditorProps = IAllProps

const defaultConfig = {
  height: 500,
  menubar: false,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'print',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'paste',
    'code',
    'help',
    'wordcount',
    'font',
  ],
  toolbar1: 'undo redo | formatselect | ' + 'bold italic backcolor | blocks fontsize | | alignleft aligncenter ',
  toolbar2: 'alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | code table help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
}

export const AmzEditor = ({ init, ...props }: AmzEditorProps) => {
  return (
    <Editor
      apiKey={import.meta.env.VITE_TINY_MCE_KEY || 'tx42jer2nz7tnrotru1he78x0s2r8auyzjp7umc9evmn1g5n'}
      init={{ ...defaultConfig, ...init }}
      {...props}
    />
  )
}

AmzEditor.displayName = 'AmzEditor'
