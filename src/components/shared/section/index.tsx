import { ReactNode } from "react";
import classnames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => (
  <section className={classnames("md:p-16 p-5 w-full h-full", className)}>
    {children}
  </section>
);

const Row = ({ children, className }: Props) => (
  <section
    className={classnames("md:p-16 p-8 w-full h-full flex flex-row", className)}
  >
    {children}
  </section>
);

const Col = ({ children, className }: Props) => (
  <section
    className={classnames("md:p-16 p-8 w-full h-full flex flex-col", className)}
  >
    {children}
  </section>
);

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <>
      <h2
        className={classnames(
          "text-blue-900 font-black md:font-extrabold md:text-3xl md:mb-6 mb-3",
          "text-2xl",
          "tracking-widest uppercase mx-auto",
          className
        )}
      >
        {title}
      </h2>
      <hr className={classnames("md:mb-16 mb-8 w-3/4 md:w-1/4 mx-auto")} />
    </>
  );
};
const Body = ({ children, className }: Props) => (
  <div className={className}>{children}</div>
);

Section.Title = Title;
Section.Body = Body;
Section.Row = Row;
Section.Col = Col;

export default Section;
