import { Arguments } from "yargs";

export type Props = Arguments<{
  dest: string;
  destEmail?: string;
  destPassword?: string;
  destPrefix?: string;
  destToken?: string;
  destUser?: string;
  src: string;
  srcEmail?: string;
  srcPassword?: string;
  srcPrefix?: string;
  srcToken?: string;
  srcUser?: string;
}>;
