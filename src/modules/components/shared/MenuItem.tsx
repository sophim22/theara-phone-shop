import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx"; 

interface ItemPros {
  translation?: string;
  link: string;
  label: string;
  classItem?: string;
}

const MenuItem = ({translation, link, label, classItem}: ItemPros) => {
  const t = useTranslations(translation);
  return <>
    <Link href={link} className={clsx("flex hover:border-b-2 transition ease-in-out justify-center uppercase hover:border-orange-500", classItem)}>
      {t(label)}
    </Link>
  </>
}
export default MenuItem;