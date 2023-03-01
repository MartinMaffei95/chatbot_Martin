import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const ChatWritter = () => {
  return (
    <div className="bg-green-600 h-20 w-screen ">
      <form className="flex h-full w-full items-center gap-2 justify-between p-2 ">
        <textarea
          className="bg-slate-200 h-full rounded flex-1 resize-none"
          autoFocus
        />
        <button
          className=" flex justify-center items-center rounded bg-slate-50 h-8 w-8 "
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default ChatWritter;
