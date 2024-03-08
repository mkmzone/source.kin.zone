import clsx from 'clsx';
import Price from './price';
import Image from 'next/image';

const Label = ({
  title,
  image,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  image: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex items-center rounded-xl border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <Image src={image as string} alt="img" width={35} height={35} className="rounded-md" />
        <h3 className="mr-1 line-clamp-2 flex-grow pl-2 text-base leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="hidden flex-none rounded-full bg-blue-600 p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
