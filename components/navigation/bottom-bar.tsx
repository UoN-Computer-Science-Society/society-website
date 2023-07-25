import ErrorIcon from '../icons/ErrorIcon';
import WarningIcon from '../icons/WarningIcon';
import BellIcon from '../icons/BellIcon';
import CheckIcon from '../icons/CheckIcon';
import NextjsIcon from '../icons/NextjsIcon';
import SourceControlIcon from '../icons/SourceControlIcon';

const Bottombar = () => {
  return (
    <footer className="w-full fixed bottom-0 flex justify-between text-xs h-[25px] secondary-bg-color">
      <div className="flex items-center">
        <a
          href="https://github.com/itsnitinr/vscode-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className="flex mr-1 h-4 items-center px-1"
        >
          <SourceControlIcon className="mr-1" />
          <p>main</p>
        </a>
        <div className="flex mr-1 h-4 items-center px-1">
          <ErrorIcon className="mr-2" />
          <p>0</p>&nbsp;&nbsp;
          <WarningIcon className="mr-2" />
          <p>0</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex mr-1 h-4 items-center px-1">
          <NextjsIcon className="mr-2" />
          <p>Powered by Next.js</p>
        </div>
        <div className="flex mr-1 h-4 items-center px-1">
          <CheckIcon className="mr-2" />
          <p>Prettier</p>
        </div>
        <div className="flex mr-1 h-4 items-center px-1">
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;