import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return (
    <section
      className={`container mx-auto  px-4 md:px-12 lg:px-24 ${className}`}
    >
      {children}
    </section>
  );
}

export default Container;
