/**
 * This file allows us to build a custom UI structure within Sanity.
 */

// Icons we are using for our menu UI
import { Layout, Radio, Settings, Zap } from 'react-feather';
import { type StructureBuilder } from 'sanity/desk';

import { schemaMetaData } from './schema';

/**
 * Because we are building a custom Sanity structure, we have to remove all
 * of our documents from the default Sanity document list.
 */

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content Root')
    .items([
      // All global configs
      S.listItem()
        .title('Configs')
        .icon(Settings)
        .child(
          S.list()
            .title('Configs')
            .items([
              S.listItem()
                .title(schemaMetaData.brandConfig.title)
                .child(
                  S.editor()
                    .title(schemaMetaData.brandConfig.title)
                    .schemaType(schemaMetaData.brandConfig.id)
                    .documentId(schemaMetaData.brandConfig.id)
                ),
              S.listItem()
                .title(schemaMetaData.companyConfig.title)
                .child(
                  S.editor()
                    .title(schemaMetaData.companyConfig.title)
                    .schemaType(schemaMetaData.companyConfig.id)
                    .documentId(schemaMetaData.companyConfig.id)
                ),
              S.listItem()
                .title(schemaMetaData.seoConfig.title)
                .child(
                  S.editor()
                    .title(schemaMetaData.seoConfig.title)
                    .schemaType(schemaMetaData.seoConfig.id)
                    .documentId(schemaMetaData.seoConfig.id)
                ),
            ])
            .showIcons(false)
        ),
      S.divider(),

      // All web-page-related documents
      S.listItem().title('Web Pages').icon(Layout).child(S.documentTypeList(schemaMetaData.page.id)),

      // All blog-related documents
      S.listItem()
        .title('Blog')
        .icon(Radio)
        .child(
          S.list()
            .title('Blog')
            .items([S.documentTypeListItem(schemaMetaData.author.id), S.documentTypeListItem(schemaMetaData.post.id)])
        ),

      S.divider(),

      // All theatre-related documents
      S.listItem()
        .title('Theatre')
        .icon(Zap)
        .child(
          S.list()
            .title('Theatre')
            .items([
              S.documentTypeListItem(schemaMetaData.show.id),
              S.documentTypeListItem(schemaMetaData.season.id),
              S.divider(),
              S.documentTypeListItem(schemaMetaData.series.id),
              S.documentTypeListItem(schemaMetaData.artist.id),
              S.documentTypeListItem(schemaMetaData.venue.id),
              S.documentTypeListItem(schemaMetaData.sponsorshipLevel.id),
              S.documentTypeListItem(schemaMetaData.supporter.id),
            ])
        ),
    ]);
