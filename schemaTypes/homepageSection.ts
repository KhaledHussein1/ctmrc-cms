// sanity/schemas/section.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'section',
  title: 'Homepage Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    },
    {
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    },
    {
      name: 'ctaHref',
      title: 'CTA Button Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'alt',
      title: 'Image Alt Text',
      type: 'string',
    },
    {
      name: 'imageLeft',
      title: 'Image on Left?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Order Ascending',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
