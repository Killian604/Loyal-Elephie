import { FC } from "react";

interface Props {
  onReset: () => void;
  onSave: () => void;
}

export const ResetChat: FC<Props> = ({ onReset, onSave }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="text-sm sm:text-base text-neutral-900 font-semibold rounded-lg px-4 py-2 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-300 mr-2"
        onClick={() => onReset()}
      >
        Reset
      </button>
      <button
        className="text-sm sm:text-base text-neutral-900 font-semibold rounded-lg px-4 py-2 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-300"
        onClick={() => onSave()}
      >
        Save
      </button>
    </div>
  );
};