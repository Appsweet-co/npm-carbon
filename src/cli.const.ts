export interface CustomArgv {
  [x: string]: unknown;
  $0: string;
  _: string[];
  dest: string;
  destEmail: string | undefined;
  destPassword: string | undefined;
  destPrefix: string | undefined;
  destToken: string | undefined;
  destUser: string | undefined;
  src: string;
  srcEmail: string | undefined;
  srcPassword: string | undefined;
  srcPrefix: string | undefined;
  srcToken: string | undefined;
  srcUser: string | undefined;
}
