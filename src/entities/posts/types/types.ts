export interface PostsState {
  postsList: InnerBlock[];
  headingData: HeadingData;
  filteredPostsList: InnerBlock[];
}

export interface PostsList {
  post_id: number;
  title: string;
  blocks: Block[];
}

export interface HeadingData {
  heading: string;
  intro: string;
}

export enum BlockName {
  agenda = 'o9/event-agenda',
  agendaItem = 'o9/event-agenda-item',
  paragraph = 'core/paragraph',
}

interface Block {
  attrs: HeadingData;
  blockName: BlockName.agenda;
  innerBlocks: InnerBlock[];
}

type Category = 'KEYNOTE';

export enum Tabs {
  day1 = 'Day 1',
  day2 = 'Day 2',
}

export interface InnerBlock {
  attrs: {
    category: Category;
    day: Tabs;
    duration: number;
    speakerList: Speaker[];
    startTime: string;
    title: string;
    coverImage?: {
      id: number;
      alt: string;
      url: string;
    };
  };
  blockName: BlockName.agendaItem;
  innerBlocks: ParagraphBlock[];
}

export interface Speaker {
  id: number;
  company_logo: { mediaId: number; mediaUrl: string }[];
  image: {
    id: number;
    alt: string;
    srcset: string;
    url: string;
  };
  name: string;
  position: string;
}

export interface ParagraphBlock {
  blockName: BlockName.paragraph;
  innerContent: string[];
  innerHTML: string;
}
