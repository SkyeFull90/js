import {assert} from 'chai';
import makeUpperCase from '../makeUppercase.cjs';

describe("Basic Tests", function(){
  it("should pass the basic tests", function(){
    assert.strictEqual(makeUpperCase(""),           "");
    assert.strictEqual(makeUpperCase("hello"), "HELLO");
    assert.strictEqual(makeUpperCase("Hello"), "HELLO");
    assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
  });
});