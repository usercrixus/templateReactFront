import ProviderInterface from "./ProviderInterface";

export default class BasicProvider {
  static subscribers: ProviderInterface[] = [];

  static clock: number = Date.now()

  static subscribe(subscriber: ProviderInterface) {
    BasicProvider.subscribers.push(subscriber);
  }

  static unsubscribe(subscriber: ProviderInterface) {
    BasicProvider.subscribers.splice(
      BasicProvider.subscribers.indexOf(subscriber),
      1
    );
  }

  static notify() {
    BasicProvider.subscribers.forEach((subscriber) => {
      subscriber.rerender();
    });
  }

  static setClock() {
    BasicProvider.clock = Date.now()
    BasicProvider.notify();
  }
}
