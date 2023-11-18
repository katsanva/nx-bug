import { basename } from "path";

describe('main', () => {
  it('should not change cwd', () => {
    expect(basename(process.cwd())).toEqual('nx-bug-application');
  });
})