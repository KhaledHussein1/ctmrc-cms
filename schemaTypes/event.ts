// sanity/schemas/event.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Homepage Event Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Registration Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Event Banner',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'alt',
      title: 'Image Alt Text',
      type: 'string',
    },
  ],
})
