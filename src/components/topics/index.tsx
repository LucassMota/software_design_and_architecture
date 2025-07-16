import { TopicsEnum, SUBTOPICS } from "./types";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./styles.module.css";

interface Props {
  setTheme: React.Dispatch<
    React.SetStateAction<Partial<Record<TopicsEnum, string>>>
  >;
  setSelectedTopic: React.Dispatch<React.SetStateAction<TopicsEnum>>;
}

export const Topics = ({ setTheme, setSelectedTopic }: Props) => {
  const topics = Object.values(TopicsEnum);

  const handleTopic = (topic: TopicsEnum, subtopic: string) => {
    setTheme((prev) => ({
      ...prev,
      [topic]: subtopic,
    }));
    setSelectedTopic(topic);
  };

  // @ts-ignore
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={<>{header}</>}
      className={styles.item}
      buttonProps={{
        className: () => `${styles.itemBtn}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

  return (
    <div
      style={{
        backgroundColor: "#282A36",
        height: "100%",
        color: "#f3f3f3f3",
        padding: "0 24px",
      }}
    >
      {topics.map((topic) => (
        <Accordion key={topic} transition transitionTimeout={250}>
          <AccordionItem header={<>{topic}</>}>
            {SUBTOPICS[topic].map((subtopic) => (
              <div
                style={{ padding: "8px 0" }}
                key={subtopic}
                onClick={() => handleTopic(topic, subtopic)}
              >
                {subtopic}
              </div>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
