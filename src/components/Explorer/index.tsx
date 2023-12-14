import {
  FileJson,
  MoreHorizontal,
} from 'lucide-react';
import { OpenFilesSubMenu } from '../OpenFilesTabs/OpenFilesSubMenu';
import { File } from './File';
import { Folder } from './Folder';
import { SubMenu } from './SubMenu';

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "/vscode/settings": {
    icon: <FileJson size={16} />,
    title: "settings.json",
  },
  "/vscode/extensions": {
    icon: <FileJson size={16} />,
    title: "extensions.json",
  }
};

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu defaultOpen title="WEN WORKSPACE">
          <Folder defaultOpen title="Visual Studio Code">
            {/* <File href="/vscode/general">
            <Code2 size={16} />
            General
            </File> */}
            <File href="/vscode/settings">
              <FileJson size={16} />
              settings.json
            </File>
            <File href="/vscode/extensions">
              <FileJson size={16} />
              extensions.json
            </File>
          </Folder>

        </SubMenu>
      </nav>
    </div>
  )
}
