import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility', () => {
    it('merges class names correctly', () => {
        expect(cn('foo', 'bar')).toBe('foo bar')
    })

    it('handles conditional class names via objects', () => {
        expect(cn('base', { active: true, disabled: false })).toBe('base active')
    })

    it('handles arrays of class names', () => {
        expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz')
    })

    it('handles falsy values (null, undefined, false, empty string)', () => {
        expect(cn('base', null, undefined, false, '', 'extra')).toBe('base extra')
    })

    it('resolves tailwind class conflicts correctly', () => {
        expect(cn('p-4', 'p-2')).toBe('p-2')
        expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
        expect(cn('bg-red-500 hover:bg-red-600', 'bg-blue-500')).toBe('hover:bg-red-600 bg-blue-500')
    })

    it('handles complex combinations of inputs', () => {
        expect(
            cn(
                'font-bold',
                ['p-4', false && 'p-2'],
                { 'text-center': true, flex: false },
                null,
                undefined,
                'p-6'
            )
        ).toBe('font-bold text-center p-6')
    })
})
