import joinIncludes from './join-includes';

describe('joinIncludes()', () => {
    it('joins include params using comma as separator', () => {
        expect(joinIncludes(['foo', 'bar', 'hello-world'])).toBe('foo,bar,hello-world');
    });

    it('returns string without duplicates', () => {
        expect(joinIncludes(['foo', 'bar', 'foo'])).toBe('foo,bar');
    });
});
