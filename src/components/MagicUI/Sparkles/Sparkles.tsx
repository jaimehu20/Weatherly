import SparklesText from "./SparklesComponent";

interface SparkleProps {
  title: string
}

export const SparklesTextDemo = (props : SparkleProps) => {
  return <SparklesText text={props.title} />;
}
