//TODO tutorial.json should propably be a key-value dictionary
import config from '@site/tutorials.json';

export interface Tutorial {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: string[];
}

export interface Tag {
  label: string;
  value: string;
  description: string;
  color: string;
}

export const TagCategories = new Map(Object.entries<Array<Tag>>(config));
export const Tags = Array.from(TagCategories.values()).flat();
export const TagValues = Tags.map((tag) => tag.value);
