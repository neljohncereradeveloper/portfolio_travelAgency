import { ReactNode } from "react";
import classnames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};
/**
 * Display FLEX
 *
 * @param param0
 * @returns
 */
const Flex = ({ children, className }: Props) => (
  <div className={classnames("flex", className)}>{children}</div>
);
/**
 * Display FLEX ROW
 *
 * @param param0
 * @returns
 */
const Row = ({ children, className }: Props) => (
  <div className={classnames("flex flex-row", className)}>{children}</div>
);
/**
 * Display FLEX COLUMN
 *
 * @param param0
 * @returns
 */
const Col = ({ children, className }: Props) => (
  <div className={classnames("flex flex-col", className)}>{children}</div>
);

Flex.Row = Row;
Flex.Col = Col;

export default Flex;
