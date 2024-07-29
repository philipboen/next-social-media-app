"use client";

import "./styles.css";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { submitPost } from "./actions";
import { useSession } from "@/app/(main)/SessionProvider";
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

export const PostEditor = () => {
  const { user } = useSession();

  const [isPending, startTransition] = useTransition();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "Write something amazing...",
      }),
    ],
    immediatelyRender: false,
  });

  const input =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

  async function onSubmit() {
    startTransition(async () => {
      await submitPost(input);
      editor?.commands.clearContent();
    });
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex gap-5">
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <EditorContent
          editor={editor}
          disabled={isPending}
          className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={onSubmit}
          disabled={!input.trim() || isPending}
          className="min-w-20"
        >
          Post
        </Button>
      </div>
    </div>
  );
};
