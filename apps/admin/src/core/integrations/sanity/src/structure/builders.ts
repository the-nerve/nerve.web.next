import { Layout } from 'react-feather';
import { type StructureBuilder } from 'sanity/desk';

/**
 * Creates List Items within the Sanity structure for singleton
 * config type documents.
 *
 * * Since config-type documents don't really have "titles" in their schemas,
 * * we are explicitly setting one.
 *
 * @param title
 * @param id
 */
export const buildConfigListItem = (S: StructureBuilder) => (title: string, id: string) =>
  S.listItem().title(title).child(S.editor().title(title).schemaType(id).documentId(id));

/**
 * Creates List Items within the Sanity structure for single page documents.
 *
 * * We are not explicitly defining a title below because we want to
 * * use the inferred dynamic titles & subtitles from Sanity.
 *
 * @param id
 */
export const buildPageListItem = (S: StructureBuilder) => (id: string) =>
  S.documentListItem().id(id).schemaType(id).icon(Layout);
