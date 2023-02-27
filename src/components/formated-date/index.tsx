import { parse, format } from "date-fns";

type Props = {
  dateString: string;
};

const FormatedDate = ({ dateString }: Props) => {
  const date = parse(dateString, "yyyy-MM-dd HH:mm:ss XX", 0);
  return <time dateTime={dateString}>{format(date, "LLLL  d, yyyy")}</time>;
};

export default FormatedDate;
