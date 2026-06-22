import {defineField, defineType} from 'sanity'
import {techIconType} from "./techIconType";

export const programmingProjectType = defineType({
    name: 'programmingProject',
    title: 'Programming Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: "link",
            type: 'string',
        }),
        defineField({
            name: "repo",
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "tech",
            type: "array",
            of: [{type: "techIcon"}],
        })
    ],
})