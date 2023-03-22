import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBold,
    faItalic,
    faStrikethrough,
    faCode,
    faParagraph,
    faHeading,
    faListUl,
    faQuoteRight,
    faUndo,
    faRedo,
    faGripLines
} from '@fortawesome/free-solid-svg-icons'

const MenuBar = ({editor}) => {
    if (!editor) {
        return null
    }


    return (
        <>
            <div
                className="flex items-center px-2">

                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    <FontAwesomeIcon
                        icon={faBold}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Bold</span>
                </button>

                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    <FontAwesomeIcon
                        icon={faItalic}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Italic</span>
                </button>

                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                    <FontAwesomeIcon
                        icon={faStrikethrough}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Italic</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                >
                    <FontAwesomeIcon
                        icon={faCode}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Italic</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <FontAwesomeIcon
                        icon={faListUl}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Italic</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                >
                    <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Italic</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                >
                    <FontAwesomeIcon
                        icon={faHeading}
                        className="h-6 w-6"
                        aria-hidden="true"
                    />
                    <span className="sr-only">h1</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                >
                    <FontAwesomeIcon
                        icon={faHeading}
                        className="h-4 w-4"
                        aria-hidden="true"
                    />
                    <span className="sr-only">h2</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                >
                    <FontAwesomeIcon
                        icon={faParagraph}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">h2</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                >
                    <FontAwesomeIcon
                        icon={faGripLines}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">hr</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().redo().run()}
                >
                    <FontAwesomeIcon
                        icon={faRedo}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">redo</span>
                </button>
                <button
                    type="button"
                    className="-m-2.5 w-10 h-10 mr-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => editor.chain().focus().undo().run()}
                >
                    <FontAwesomeIcon
                        icon={faUndo}
                        className="h-5 w-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">undo</span>
                </button>
            </div>
        </>
    )
}


export default (props) => {

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: 'p-5',
                id: 'bodyvalue',
                name: 'bodyvalue'
            },
        },
        extensions: [
            StarterKit,
        ],
        content: props.value,
        onUpdate: ({editor}) => {
            const html = editor.getHTML();
            props.onChangeHandler(html);
        },
    })

    return (
        <div className="flex items-start space-x-4">

            <div className="min-w-0 flex-1">
                <form action="#" className="relative" onClick={props.onSubmitHandler}>
                    <div
                        className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <EditorContent
                            editor={editor}
                        />
                        {/* Spacer element to match the height of the toolbar */}
                        <div className="py-2" aria-hidden="true">
                            {/* Matches height of button in toolbar (1px border + 36px content height) */}
                            <div className="py-px">
                                <div className="h-9"/>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
                        <div className="flex items-center space-x-5">
                            <div className="flex items-center">
                                <MenuBar editor={editor}/>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button
                                type={"submit"}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                opslaan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}