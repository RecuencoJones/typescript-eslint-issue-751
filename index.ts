const SomeFancyDecorator = (): MethodDecorator => (target) => target;

export class Foo {
  @SomeFancyDecorator()
  method() {
    return Promise.resolve('foo');
  }
}
