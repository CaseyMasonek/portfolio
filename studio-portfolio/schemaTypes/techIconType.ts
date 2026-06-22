import {defineField, defineType} from 'sanity'

export const techIconType = defineType({
    name: 'techIcon',
    title: 'Tech Icon',
    type: 'document',
    fields: [
        defineField({
            name: "techName",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "icon",
            type: "image",
            validation: (rule) => rule.required(),
        }),
    ],
})