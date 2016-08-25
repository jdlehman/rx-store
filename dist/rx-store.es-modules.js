var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var root = createCommonjsModule(function (module, exports) {
    "use strict";

    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };
    exports.root = objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self || objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window;
    /* tslint:disable:no-unused-variable */
    var freeExports = objectTypes[typeof exports === 'undefined' ? 'undefined' : _typeof(exports)] && exports && !exports.nodeType && exports;
    var freeModule = objectTypes[typeof module === 'undefined' ? 'undefined' : _typeof(module)] && module && !module.nodeType && module;
    var freeGlobal = objectTypes[_typeof(commonjsGlobal)] && commonjsGlobal;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        exports.root = freeGlobal;
    }
    });

var root$1 = interopDefault(root);
var root$$1 = root.root;


var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var require$$0 = Object.freeze({
    default: root$1,
    root: root$$1
});

var isFunction = createCommonjsModule(function (module, exports) {
    "use strict";

    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;
    });

var isFunction$1 = interopDefault(isFunction);
var isFunction$$1 = isFunction.isFunction;


var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var require$$3 = Object.freeze({
    default: isFunction$1,
    isFunction: isFunction$$1
});

var isArray = createCommonjsModule(function (module, exports) {
  "use strict";

  exports.isArray = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
  });

var isArray$1 = interopDefault(isArray);
var isArray$$1 = isArray.isArray;


var require$$5 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var require$$5 = Object.freeze({
  default: isArray$1,
  isArray: isArray$$1
});

var isObject = createCommonjsModule(function (module, exports) {
    "use strict";

    function isObject(x) {
        return x != null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
    }
    exports.isObject = isObject;
    });

var isObject$1 = interopDefault(isObject);
var isObject$$1 = isObject.isObject;


var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var require$$4 = Object.freeze({
    default: isObject$1,
    isObject: isObject$$1
});

var errorObject = createCommonjsModule(function (module, exports) {
  "use strict";
  // typeof any so that it we don't have to cast when comparing a result to the error object

  exports.errorObject = { e: {} };
  });

var errorObject$1 = interopDefault(errorObject);
var errorObject$$1 = errorObject.errorObject;


var require$$0$3 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$3 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$3 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$3 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var require$$0$3 = Object.freeze({
  default: errorObject$1,
  errorObject: errorObject$$1
});

var tryCatch = createCommonjsModule(function (module, exports) {
    "use strict";

    var errorObject_1 = interopDefault(require$$0$3);
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        } catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports.tryCatch = tryCatch;
    ;
    });

var tryCatch$1 = interopDefault(tryCatch);
var tryCatch$$1 = tryCatch.tryCatch;


var require$$2 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var require$$2 = Object.freeze({
    default: tryCatch$1,
    tryCatch: tryCatch$$1
});

var UnsubscriptionError = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
                return i + 1 + ") " + err.toString();
            }).join('\n  ') : '');
            this.name = err.name = 'UnsubscriptionError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return UnsubscriptionError;
    }(Error);
    exports.UnsubscriptionError = UnsubscriptionError;
    });

var UnsubscriptionError$1 = interopDefault(UnsubscriptionError);
var UnsubscriptionError$$1 = UnsubscriptionError.UnsubscriptionError;


var require$$0$4 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$4 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$4 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$4 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var require$$0$4 = Object.freeze({
    default: UnsubscriptionError$1,
    UnsubscriptionError: UnsubscriptionError$$1
});

var Subscription = createCommonjsModule(function (module, exports) {
    "use strict";

    var isArray_1 = interopDefault(require$$5);
    var isObject_1 = interopDefault(require$$4);
    var isFunction_1 = interopDefault(require$$3);
    var tryCatch_1 = interopDefault(require$$2);
    var errorObject_1 = interopDefault(require$$0$3);
    var UnsubscriptionError_1 = interopDefault(require$$0$4);
    /**
     * Represents a disposable resource, such as the execution of an Observable. A
     * Subscription has one important method, `unsubscribe`, that takes no argument
     * and just disposes the resource held by the subscription.
     *
     * Additionally, subscriptions may be grouped together through the `add()`
     * method, which will attach a child Subscription to the current Subscription.
     * When a Subscription is unsubscribed, all its children (and its grandchildren)
     * will be unsubscribed as well.
     *
     * @class Subscription
     */
    var Subscription = function () {
        /**
         * @param {function(): void} [unsubscribe] A function describing how to
         * perform the disposal of resources when the `unsubscribe` method is called.
         */
        function Subscription(unsubscribe) {
            /**
             * A flag to indicate whether this Subscription has already been unsubscribed.
             * @type {boolean}
             */
            this.closed = false;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        /**
         * Disposes the resources held by the subscription. May, for instance, cancel
         * an ongoing Observable execution or cancel any other type of work that
         * started when the Subscription was created.
         * @return {void}
         */
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            this.closed = true;
            var _a = this,
                _unsubscribe = _a._unsubscribe,
                _subscriptions = _a._subscriptions;
            this._subscriptions = null;
            if (isFunction_1.isFunction(_unsubscribe)) {
                var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                if (trial === errorObject_1.errorObject) {
                    hasErrors = true;
                    (errors = errors || []).push(errorObject_1.errorObject.e);
                }
            }
            if (isArray_1.isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1.isObject(sub)) {
                        var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject_1.errorObject.e;
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = errors.concat(err.errors);
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        };
        /**
         * Adds a tear down to be called during the unsubscribe() of this
         * Subscription.
         *
         * If the tear down being added is a subscription that is already
         * unsubscribed, is the same reference `add` is being called on, or is
         * `Subscription.EMPTY`, it will not be added.
         *
         * If this subscription is already in an `closed` state, the passed
         * tear down logic will be executed immediately.
         *
         * @param {TeardownLogic} teardown The additional logic to execute on
         * teardown.
         * @return {Subscription} Returns the Subscription used or created to be
         * added to the inner subscriptions list. This Subscription can be used with
         * `remove()` to remove the passed teardown logic from the inner subscriptions
         * list.
         */
        Subscription.prototype.add = function (teardown) {
            if (!teardown || teardown === Subscription.EMPTY) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var sub = teardown;
            switch (typeof teardown === 'undefined' ? 'undefined' : _typeof(teardown)) {
                case 'function':
                    sub = new Subscription(teardown);
                case 'object':
                    if (sub.closed || typeof sub.unsubscribe !== 'function') {
                        break;
                    } else if (this.closed) {
                        sub.unsubscribe();
                    } else {
                        (this._subscriptions || (this._subscriptions = [])).push(sub);
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            return sub;
        };
        /**
         * Removes a Subscription from the internal list of subscriptions that will
         * unsubscribe during the unsubscribe process of this Subscription.
         * @param {Subscription} subscription The subscription to remove.
         * @return {void}
         */
        Subscription.prototype.remove = function (subscription) {
            // HACK: This might be redundant because of the logic in `add()`
            if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
                return;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription());
        return Subscription;
    }();
    exports.Subscription = Subscription;
    });

var Subscription$1 = interopDefault(Subscription);
var Subscription$$1 = Subscription.Subscription;


var require$$0$2 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$2 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$2 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$2 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var require$$0$2 = Object.freeze({
    default: Subscription$1,
    Subscription: Subscription$$1
});

var Observer = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.empty = {
        closed: true,
        next: function next(value) {},
        error: function error(err) {
            throw err;
        },
        complete: function complete() {}
    };
    });

var Observer$1 = interopDefault(Observer);
var empty = Observer.empty;

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var require$$1$2 = Object.freeze({
    default: Observer$1,
    empty: empty
});

var rxSubscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var root_1 = interopDefault(require$$0);
    var _Symbol = root_1.root.Symbol;
    exports.$$rxSubscriber = typeof _Symbol === 'function' && typeof _Symbol.for === 'function' ? _Symbol.for('rxSubscriber') : '@@rxSubscriber';
    });

var rxSubscriber$1 = interopDefault(rxSubscriber);
var $$rxSubscriber = rxSubscriber.$$rxSubscriber;

var require$$0$5 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$5 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$5 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$5 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var require$$0$5 = Object.freeze({
    default: rxSubscriber$1,
    $$rxSubscriber: $$rxSubscriber
});

var Subscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isFunction_1 = interopDefault(require$$3);
    var Subscription_1 = interopDefault(require$$0$2);
    var Observer_1 = interopDefault(require$$1$2);
    var rxSubscriber_1 = interopDefault(require$$0$5);
    /**
     * Implements the {@link Observer} interface and extends the
     * {@link Subscription} class. While the {@link Observer} is the public API for
     * consuming the values of an {@link Observable}, all Observers get converted to
     * a Subscriber, in order to provide Subscription-like capabilities such as
     * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
     * implementing operators, but it is rarely used as a public API.
     *
     * @class Subscriber<T>
     */
    var Subscriber = function (_super) {
        __extends(Subscriber, _super);
        /**
         * @param {Observer|function(value: T): void} [destinationOrNext] A partially
         * defined Observer or a `next` callback function.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         */
        function Subscriber(destinationOrNext, error, complete) {
            _super.call(this);
            this.syncErrorValue = null;
            this.syncErrorThrown = false;
            this.syncErrorThrowable = false;
            this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    this.destination = Observer_1.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        this.destination = Observer_1.empty;
                        break;
                    }
                    if ((typeof destinationOrNext === 'undefined' ? 'undefined' : _typeof(destinationOrNext)) === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            this.destination = destinationOrNext;
                            this.destination.add(this);
                        } else {
                            this.syncErrorThrowable = true;
                            this.destination = new SafeSubscriber(this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    this.syncErrorThrowable = true;
                    this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                    break;
            }
        }
        Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return this;
        };
        /**
         * A static factory for a Subscriber, given a (potentially partial) definition
         * of an Observer.
         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
         * Observer represented by the given arguments.
         */
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        /**
         * The {@link Observer} callback to receive notifications of type `next` from
         * the Observable, with a value. The Observable may call this method 0 or more
         * times.
         * @param {T} [value] The `next` value.
         * @return {void}
         */
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        /**
         * The {@link Observer} callback to receive notifications of type `error` from
         * the Observable, with an attached {@link Error}. Notifies the Observer that
         * the Observable has experienced an error condition.
         * @param {any} [err] The `error` exception.
         * @return {void}
         */
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        /**
         * The {@link Observer} callback to receive a valueless notification of type
         * `complete` from the Observable. Notifies the Observer that the Observable
         * has finished sending push-based notifications.
         * @return {void}
         */
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        return Subscriber;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parent, observerOrNext, error, complete) {
            _super.call(this);
            this._parent = _parent;
            var next;
            var context = this;
            if (isFunction_1.isFunction(observerOrNext)) {
                next = observerOrNext;
            } else if (observerOrNext) {
                context = observerOrNext;
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
            this._context = context;
            this._next = next;
            this._error = error;
            this._complete = complete;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parent = this._parent;
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                } else if (this.__tryOrSetError(_parent, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._error) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._error, err);
                        this.unsubscribe();
                    }
                } else if (!_parent.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                } else {
                    _parent.syncErrorValue = err;
                    _parent.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._complete) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._complete);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._complete);
                        this.unsubscribe();
                    }
                } else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parent = this._parent;
            this._context = null;
            this._parent = null;
            _parent.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber);
    });

var Subscriber$1 = interopDefault(Subscriber);
var Subscriber$$1 = Subscriber.Subscriber;


var require$$0$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$0$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$0$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$0$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var require$$0$1 = Object.freeze({
    default: Subscriber$1,
    Subscriber: Subscriber$$1
});

var toSubscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var Subscriber_1 = interopDefault(require$$0$1);
    var rxSubscriber_1 = interopDefault(require$$0$5);
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
                return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber_1.Subscriber();
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;
    });

var toSubscriber$1 = interopDefault(toSubscriber);
var toSubscriber$$1 = toSubscriber.toSubscriber;


var require$$1$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var require$$1$1 = Object.freeze({
    default: toSubscriber$1,
    toSubscriber: toSubscriber$$1
});

var observable = createCommonjsModule(function (module, exports) {
    "use strict";

    var root_1 = interopDefault(require$$0);
    function getSymbolObservable(context) {
        var $$observable;
        var _Symbol = context.Symbol;
        if (typeof _Symbol === 'function') {
            if (_Symbol.observable) {
                $$observable = _Symbol.observable;
            } else {
                $$observable = _Symbol('observable');
                _Symbol.observable = $$observable;
            }
        } else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    exports.getSymbolObservable = getSymbolObservable;
    exports.$$observable = getSymbolObservable(root_1.root);
    });

var observable$1 = interopDefault(observable);
var $$observable = observable.$$observable;
var getSymbolObservable = observable.getSymbolObservable;

var require$$0$6 = Object.freeze({
    default: observable$1,
    $$observable: $$observable,
    getSymbolObservable: getSymbolObservable
});

var require$$0$6 = Object.freeze({
    default: observable$1,
    $$observable: $$observable,
    getSymbolObservable: getSymbolObservable
});

var require$$0$6 = Object.freeze({
    default: observable$1,
    $$observable: $$observable,
    getSymbolObservable: getSymbolObservable
});

var require$$0$6 = Object.freeze({
    default: observable$1,
    $$observable: $$observable,
    getSymbolObservable: getSymbolObservable
});

var require$$0$6 = Object.freeze({
    default: observable$1,
    $$observable: $$observable,
    getSymbolObservable: getSymbolObservable
});

var Observable = createCommonjsModule(function (module, exports) {
    "use strict";

    var root_1 = interopDefault(require$$0);
    var toSubscriber_1 = interopDefault(require$$1$1);
    var observable_1 = interopDefault(require$$0$6);
    /**
     * A representation of any set of values over any amount of time. This the most basic building block
     * of RxJS.
     *
     * @class Observable<T>
     */
    var Observable = function () {
        /**
         * @constructor
         * @param {Function} subscribe the function that is  called when the Observable is
         * initially subscribed to. This function is given a Subscriber, to which new values
         * can be `next`ed, or an `error` method can be called to raise an error, or
         * `complete` can be called to notify of a successful completion.
         */
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        /**
         * Creates a new Observable, with this Observable as the source, and the passed
         * operator defined as the new observable's operator.
         * @method lift
         * @param {Operator} operator the operator defining the operation to take on the observable
         * @return {Observable} a new observable with the Operator applied
         */
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        /**
         * Registers handlers for handling emitted values, error and completions from the observable, and
         *  executes the observable's subscriber function, which will take action to set up the underlying data stream
         * @method subscribe
         * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
         *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
         * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
         *  the error will be thrown as unhandled
         * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
         * @return {ISubscription} a subscription reference to the registered handlers
         */
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this);
            } else {
                sink.add(this._subscribe(sink));
            }
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        /**
         * @method forEach
         * @param {Function} next a handler for each value emitted by the observable
         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
         * @return {Promise} a promise that either resolves on observable completion or
         *  rejects with the handled error
         */
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                    PromiseCtor = root_1.root.Rx.config.Promise;
                } else if (root_1.root.Promise) {
                    PromiseCtor = root_1.root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        // if there is a subscription, then we can surmise
                        // the next handling is asynchronous. Any errors thrown
                        // need to be rejected explicitly and unsubscribe must be
                        // called manually
                        try {
                            next(value);
                        } catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    } else {
                        // if there is NO subscription, then we're getting a nexted
                        // value synchronously during subscription. We can just call it.
                        // If it errors, Observable's `subscribe` will ensure the
                        // unsubscription logic is called, then synchronously rethrow the error.
                        // After that, Promise will trap the error and send it
                        // down the rejection path.
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        /**
         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
         * @method Symbol.observable
         * @return {Observable} this instance of the observable
         */
        Observable.prototype[observable_1.$$observable] = function () {
            return this;
        };
        // HACK: Since TypeScript inherits static properties too, we have to
        // fight against TypeScript here so Subject can have a different static create signature
        /**
         * Creates a new cold Observable by calling the Observable constructor
         * @static true
         * @owner Observable
         * @method create
         * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
         * @return {Observable} a new cold observable
         */
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }();
    exports.Observable = Observable;
    });

var Observable$1 = interopDefault(Observable);
var Observable$$1 = Observable.Observable;


var require$$1 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$1 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$1 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$1 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var require$$1 = Object.freeze({
    default: Observable$1,
    Observable: Observable$$1
});

var ObjectUnsubscribedError = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an action is invalid because the object has been
     * unsubscribed.
     *
     * @see {@link Subject}
     * @see {@link BehaviorSubject}
     *
     * @class ObjectUnsubscribedError
     */
    var ObjectUnsubscribedError = function (_super) {
        __extends(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var err = _super.call(this, 'object unsubscribed');
            this.name = err.name = 'ObjectUnsubscribedError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ObjectUnsubscribedError;
    }(Error);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
    });

var ObjectUnsubscribedError$1 = interopDefault(ObjectUnsubscribedError);
var ObjectUnsubscribedError$$1 = ObjectUnsubscribedError.ObjectUnsubscribedError;


var require$$2$1 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$1 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$1 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$1 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var require$$2$1 = Object.freeze({
    default: ObjectUnsubscribedError$1,
    ObjectUnsubscribedError: ObjectUnsubscribedError$$1
});

var SubjectSubscription = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = interopDefault(require$$0$2);
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SubjectSubscription = function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            _super.call(this);
            this.subject = subject;
            this.subscriber = subscriber;
            this.closed = false;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription_1.Subscription);
    exports.SubjectSubscription = SubjectSubscription;
    });

var SubjectSubscription$1 = interopDefault(SubjectSubscription);
var SubjectSubscription$$1 = SubjectSubscription.SubjectSubscription;


var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var require$$1$3 = Object.freeze({
    default: SubjectSubscription$1,
    SubjectSubscription: SubjectSubscription$$1
});

var Subject = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = interopDefault(require$$1);
    var Subscriber_1 = interopDefault(require$$0$1);
    var Subscription_1 = interopDefault(require$$0$2);
    var ObjectUnsubscribedError_1 = interopDefault(require$$2$1);
    var SubjectSubscription_1 = interopDefault(require$$1$3);
    var rxSubscriber_1 = interopDefault(require$$0$5);
    /**
     * @class SubjectSubscriber<T>
     */
    var SubjectSubscriber = function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            _super.call(this, destination);
            this.destination = destination;
        }
        return SubjectSubscriber;
    }(Subscriber_1.Subscriber);
    exports.SubjectSubscriber = SubjectSubscriber;
    /**
     * @class Subject<T>
     */
    var Subject = function (_super) {
        __extends(Subject, _super);
        function Subject() {
            _super.call(this);
            this.observers = [];
            this.closed = false;
            this.isStopped = false;
            this.hasError = false;
            this.thrownError = null;
        }
        Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            } else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription_1.Subscription.EMPTY;
            } else if (this.isStopped) {
                subscriber.complete();
                return Subscription_1.Subscription.EMPTY;
            } else {
                this.observers.push(subscriber);
                return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable_1.Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable_1.Observable);
    exports.Subject = Subject;
    /**
     * @class AnonymousSubject<T>
     */
    var AnonymousSubject = function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            _super.call(this);
            this.destination = destination;
            this.source = source;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            } else {
                return Subscription_1.Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject);
    exports.AnonymousSubject = AnonymousSubject;
    });

interopDefault(Subject);
var Subject$$1 = Subject.Subject;

var ScalarObservable = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = interopDefault(require$$1);
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ScalarObservable = function (_super) {
        __extends(ScalarObservable, _super);
        function ScalarObservable(value, scheduler) {
            _super.call(this);
            this.value = value;
            this.scheduler = scheduler;
            this._isScalar = true;
            if (scheduler) {
                this._isScalar = false;
            }
        }
        ScalarObservable.create = function (value, scheduler) {
            return new ScalarObservable(value, scheduler);
        };
        ScalarObservable.dispatch = function (state) {
            var done = state.done,
                value = state.value,
                subscriber = state.subscriber;
            if (done) {
                subscriber.complete();
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                return;
            }
            state.done = true;
            this.schedule(state);
        };
        ScalarObservable.prototype._subscribe = function (subscriber) {
            var value = this.value;
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(ScalarObservable.dispatch, 0, {
                    done: false, value: value, subscriber: subscriber
                });
            } else {
                subscriber.next(value);
                if (!subscriber.closed) {
                    subscriber.complete();
                }
            }
        };
        return ScalarObservable;
    }(Observable_1.Observable);
    exports.ScalarObservable = ScalarObservable;
    });

var ScalarObservable$1 = interopDefault(ScalarObservable);
var ScalarObservable$$1 = ScalarObservable.ScalarObservable;


var require$$2$2 = Object.freeze({
    default: ScalarObservable$1,
    ScalarObservable: ScalarObservable$$1
});

var require$$2$2 = Object.freeze({
    default: ScalarObservable$1,
    ScalarObservable: ScalarObservable$$1
});

var require$$2$2 = Object.freeze({
    default: ScalarObservable$1,
    ScalarObservable: ScalarObservable$$1
});

var require$$2$2 = Object.freeze({
    default: ScalarObservable$1,
    ScalarObservable: ScalarObservable$$1
});

var require$$2$2 = Object.freeze({
    default: ScalarObservable$1,
    ScalarObservable: ScalarObservable$$1
});

var EmptyObservable = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = interopDefault(require$$1);
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var EmptyObservable = function (_super) {
        __extends(EmptyObservable, _super);
        function EmptyObservable(scheduler) {
            _super.call(this);
            this.scheduler = scheduler;
        }
        /**
         * Creates an Observable that emits no items to the Observer and immediately
         * emits a complete notification.
         *
         * <span class="informal">Just emits 'complete', and nothing else.
         * </span>
         *
         * <img src="./img/empty.png" width="100%">
         *
         * This static operator is useful for creating a simple Observable that only
         * emits the complete notification. It can be used for composing with other
         * Observables, such as in a {@link mergeMap}.
         *
         * @example <caption>Emit the number 7, then complete.</caption>
         * var result = Rx.Observable.empty().startWith(7);
         * result.subscribe(x => console.log(x));
         *
         * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
         * var interval = Rx.Observable.interval(1000);
         * var result = interval.mergeMap(x =>
         *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
         * );
         * result.subscribe(x => console.log(x));
         *
         * @see {@link create}
         * @see {@link never}
         * @see {@link of}
         * @see {@link throw}
         *
         * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
         * the emission of the complete notification.
         * @return {Observable} An "empty" Observable: emits only the complete
         * notification.
         * @static true
         * @name empty
         * @owner Observable
         */
        EmptyObservable.create = function (scheduler) {
            return new EmptyObservable(scheduler);
        };
        EmptyObservable.dispatch = function (arg) {
            var subscriber = arg.subscriber;
            subscriber.complete();
        };
        EmptyObservable.prototype._subscribe = function (subscriber) {
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
            } else {
                subscriber.complete();
            }
        };
        return EmptyObservable;
    }(Observable_1.Observable);
    exports.EmptyObservable = EmptyObservable;
    });

var EmptyObservable$1 = interopDefault(EmptyObservable);
var EmptyObservable$$1 = EmptyObservable.EmptyObservable;


var require$$1$5 = Object.freeze({
    default: EmptyObservable$1,
    EmptyObservable: EmptyObservable$$1
});

var require$$1$5 = Object.freeze({
    default: EmptyObservable$1,
    EmptyObservable: EmptyObservable$$1
});

var require$$1$5 = Object.freeze({
    default: EmptyObservable$1,
    EmptyObservable: EmptyObservable$$1
});

var require$$1$5 = Object.freeze({
    default: EmptyObservable$1,
    EmptyObservable: EmptyObservable$$1
});

var require$$1$5 = Object.freeze({
    default: EmptyObservable$1,
    EmptyObservable: EmptyObservable$$1
});

var isScheduler = createCommonjsModule(function (module, exports) {
    "use strict";

    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }
    exports.isScheduler = isScheduler;
    });

var isScheduler$1 = interopDefault(isScheduler);
var isScheduler$$1 = isScheduler.isScheduler;


var require$$2$3 = Object.freeze({
    default: isScheduler$1,
    isScheduler: isScheduler$$1
});

var require$$2$3 = Object.freeze({
    default: isScheduler$1,
    isScheduler: isScheduler$$1
});

var require$$2$3 = Object.freeze({
    default: isScheduler$1,
    isScheduler: isScheduler$$1
});

var require$$2$3 = Object.freeze({
    default: isScheduler$1,
    isScheduler: isScheduler$$1
});

var require$$2$3 = Object.freeze({
    default: isScheduler$1,
    isScheduler: isScheduler$$1
});

var ArrayObservable = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = interopDefault(require$$1);
    var ScalarObservable_1 = interopDefault(require$$2$2);
    var EmptyObservable_1 = interopDefault(require$$1$5);
    var isScheduler_1 = interopDefault(require$$2$3);
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ArrayObservable = function (_super) {
        __extends(ArrayObservable, _super);
        function ArrayObservable(array, scheduler) {
            _super.call(this);
            this.array = array;
            this.scheduler = scheduler;
            if (!scheduler && array.length === 1) {
                this._isScalar = true;
                this.value = array[0];
            }
        }
        ArrayObservable.create = function (array, scheduler) {
            return new ArrayObservable(array, scheduler);
        };
        /**
         * Creates an Observable that emits some values you specify as arguments,
         * immediately one after the other, and then emits a complete notification.
         *
         * <span class="informal">Emits the arguments you provide, then completes.
         * </span>
         *
         * <img src="./img/of.png" width="100%">
         *
         * This static operator is useful for creating a simple Observable that only
         * emits the arguments given, and the complete notification thereafter. It can
         * be used for composing with other Observables, such as with {@link concat}.
         * By default, it uses a `null` Scheduler, which means the `next`
         * notifications are sent synchronously, although with a different Scheduler
         * it is possible to determine when those notifications will be delivered.
         *
         * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
         * var numbers = Rx.Observable.of(10, 20, 30);
         * var letters = Rx.Observable.of('a', 'b', 'c');
         * var interval = Rx.Observable.interval(1000);
         * var result = numbers.concat(letters).concat(interval);
         * result.subscribe(x => console.log(x));
         *
         * @see {@link create}
         * @see {@link empty}
         * @see {@link never}
         * @see {@link throw}
         *
         * @param {...T} values Arguments that represent `next` values to be emitted.
         * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
         * the emissions of the `next` notifications.
         * @return {Observable<T>} An Observable that emits each given input value.
         * @static true
         * @name of
         * @owner Observable
         */
        ArrayObservable.of = function () {
            var array = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                array[_i - 0] = arguments[_i];
            }
            var scheduler = array[array.length - 1];
            if (isScheduler_1.isScheduler(scheduler)) {
                array.pop();
            } else {
                scheduler = null;
            }
            var len = array.length;
            if (len > 1) {
                return new ArrayObservable(array, scheduler);
            } else if (len === 1) {
                return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
            } else {
                return new EmptyObservable_1.EmptyObservable(scheduler);
            }
        };
        ArrayObservable.dispatch = function (state) {
            var array = state.array,
                index = state.index,
                count = state.count,
                subscriber = state.subscriber;
            if (index >= count) {
                subscriber.complete();
                return;
            }
            subscriber.next(array[index]);
            if (subscriber.closed) {
                return;
            }
            state.index = index + 1;
            this.schedule(state);
        };
        ArrayObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var array = this.array;
            var count = array.length;
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(ArrayObservable.dispatch, 0, {
                    array: array, index: index, count: count, subscriber: subscriber
                });
            } else {
                for (var i = 0; i < count && !subscriber.closed; i++) {
                    subscriber.next(array[i]);
                }
                subscriber.complete();
            }
        };
        return ArrayObservable;
    }(Observable_1.Observable);
    exports.ArrayObservable = ArrayObservable;
    });

var ArrayObservable$1 = interopDefault(ArrayObservable);
var ArrayObservable$$1 = ArrayObservable.ArrayObservable;


var require$$1$4 = Object.freeze({
    default: ArrayObservable$1,
    ArrayObservable: ArrayObservable$$1
});

var require$$1$4 = Object.freeze({
    default: ArrayObservable$1,
    ArrayObservable: ArrayObservable$$1
});

var require$$1$4 = Object.freeze({
    default: ArrayObservable$1,
    ArrayObservable: ArrayObservable$$1
});

var require$$1$4 = Object.freeze({
    default: ArrayObservable$1,
    ArrayObservable: ArrayObservable$$1
});

var require$$1$4 = Object.freeze({
    default: ArrayObservable$1,
    ArrayObservable: ArrayObservable$$1
});

var OuterSubscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = interopDefault(require$$0$1);
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var OuterSubscriber = function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            _super.apply(this, arguments);
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber_1.Subscriber);
    exports.OuterSubscriber = OuterSubscriber;
    });

var OuterSubscriber$1 = interopDefault(OuterSubscriber);
var OuterSubscriber$$1 = OuterSubscriber.OuterSubscriber;


var require$$1$7 = Object.freeze({
    default: OuterSubscriber$1,
    OuterSubscriber: OuterSubscriber$$1
});

var require$$1$7 = Object.freeze({
    default: OuterSubscriber$1,
    OuterSubscriber: OuterSubscriber$$1
});

var require$$1$7 = Object.freeze({
    default: OuterSubscriber$1,
    OuterSubscriber: OuterSubscriber$$1
});

var require$$1$7 = Object.freeze({
    default: OuterSubscriber$1,
    OuterSubscriber: OuterSubscriber$$1
});

var require$$1$7 = Object.freeze({
    default: OuterSubscriber$1,
    OuterSubscriber: OuterSubscriber$$1
});

var isPromise = createCommonjsModule(function (module, exports) {
    "use strict";

    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    exports.isPromise = isPromise;
    });

var isPromise$1 = interopDefault(isPromise);
var isPromise$$1 = isPromise.isPromise;


var require$$4$1 = Object.freeze({
    default: isPromise$1,
    isPromise: isPromise$$1
});

var require$$4$1 = Object.freeze({
    default: isPromise$1,
    isPromise: isPromise$$1
});

var require$$4$1 = Object.freeze({
    default: isPromise$1,
    isPromise: isPromise$$1
});

var require$$4$1 = Object.freeze({
    default: isPromise$1,
    isPromise: isPromise$$1
});

var require$$4$1 = Object.freeze({
    default: isPromise$1,
    isPromise: isPromise$$1
});

var iterator = createCommonjsModule(function (module, exports) {
    "use strict";

    var root_1 = interopDefault(require$$0);
    var _Symbol = root_1.root.Symbol;
    if (typeof _Symbol === 'function') {
        if (_Symbol.iterator) {
            exports.$$iterator = _Symbol.iterator;
        } else if (typeof _Symbol.for === 'function') {
            exports.$$iterator = _Symbol.for('iterator');
        }
    } else {
        if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
            // Bug for mozilla version
            exports.$$iterator = '@@iterator';
        } else if (root_1.root.Map) {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
                    exports.$$iterator = key;
                    break;
                }
            }
        } else {
            exports.$$iterator = '@@iterator';
        }
    }
    });

var iterator$1 = interopDefault(iterator);
var $$iterator = iterator.$$iterator;

var require$$2$4 = Object.freeze({
    default: iterator$1,
    $$iterator: $$iterator
});

var require$$2$4 = Object.freeze({
    default: iterator$1,
    $$iterator: $$iterator
});

var require$$2$4 = Object.freeze({
    default: iterator$1,
    $$iterator: $$iterator
});

var require$$2$4 = Object.freeze({
    default: iterator$1,
    $$iterator: $$iterator
});

var require$$2$4 = Object.freeze({
    default: iterator$1,
    $$iterator: $$iterator
});

var InnerSubscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = interopDefault(require$$0$1);
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var InnerSubscriber = function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            _super.call(this);
            this.parent = parent;
            this.outerValue = outerValue;
            this.outerIndex = outerIndex;
            this.index = 0;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber_1.Subscriber);
    exports.InnerSubscriber = InnerSubscriber;
    });

var InnerSubscriber$1 = interopDefault(InnerSubscriber);
var InnerSubscriber$$1 = InnerSubscriber.InnerSubscriber;


var require$$1$8 = Object.freeze({
    default: InnerSubscriber$1,
    InnerSubscriber: InnerSubscriber$$1
});

var require$$1$8 = Object.freeze({
    default: InnerSubscriber$1,
    InnerSubscriber: InnerSubscriber$$1
});

var require$$1$8 = Object.freeze({
    default: InnerSubscriber$1,
    InnerSubscriber: InnerSubscriber$$1
});

var require$$1$8 = Object.freeze({
    default: InnerSubscriber$1,
    InnerSubscriber: InnerSubscriber$$1
});

var require$$1$8 = Object.freeze({
    default: InnerSubscriber$1,
    InnerSubscriber: InnerSubscriber$$1
});

var subscribeToResult = createCommonjsModule(function (module, exports) {
    "use strict";

    var root_1 = interopDefault(require$$0);
    var isArray_1 = interopDefault(require$$5);
    var isPromise_1 = interopDefault(require$$4$1);
    var Observable_1 = interopDefault(require$$1);
    var iterator_1 = interopDefault(require$$2$4);
    var InnerSubscriber_1 = interopDefault(require$$1$8);
    var observable_1 = interopDefault(require$$0$6);
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        if (destination.closed) {
            return null;
        }
        if (result instanceof Observable_1.Observable) {
            if (result._isScalar) {
                destination.next(result.value);
                destination.complete();
                return null;
            } else {
                return result.subscribe(destination);
            }
        }
        if (isArray_1.isArray(result)) {
            for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
                destination.next(result[i]);
            }
            if (!destination.closed) {
                destination.complete();
            }
        } else if (isPromise_1.isPromise(result)) {
            result.then(function (value) {
                if (!destination.closed) {
                    destination.next(value);
                    destination.complete();
                }
            }, function (err) {
                return destination.error(err);
            }).then(null, function (err) {
                // Escaping the Promise trap: globally throw unhandled errors
                root_1.root.setTimeout(function () {
                    throw err;
                });
            });
            return destination;
        } else if (typeof result[iterator_1.$$iterator] === 'function') {
            var iterator = result[iterator_1.$$iterator]();
            do {
                var item = iterator.next();
                if (item.done) {
                    destination.complete();
                    break;
                }
                destination.next(item.value);
                if (destination.closed) {
                    break;
                }
            } while (true);
        } else if (typeof result[observable_1.$$observable] === 'function') {
            var obs = result[observable_1.$$observable]();
            if (typeof obs.subscribe !== 'function') {
                destination.error(new Error('invalid observable'));
            } else {
                return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
            }
        } else {
            destination.error(new TypeError('unknown type returned'));
        }
        return null;
    }
    exports.subscribeToResult = subscribeToResult;
    });

var subscribeToResult$1 = interopDefault(subscribeToResult);
var subscribeToResult$$1 = subscribeToResult.subscribeToResult;


var require$$0$9 = Object.freeze({
    default: subscribeToResult$1,
    subscribeToResult: subscribeToResult$$1
});

var require$$0$9 = Object.freeze({
    default: subscribeToResult$1,
    subscribeToResult: subscribeToResult$$1
});

var require$$0$9 = Object.freeze({
    default: subscribeToResult$1,
    subscribeToResult: subscribeToResult$$1
});

var require$$0$9 = Object.freeze({
    default: subscribeToResult$1,
    subscribeToResult: subscribeToResult$$1
});

var require$$0$9 = Object.freeze({
    default: subscribeToResult$1,
    subscribeToResult: subscribeToResult$$1
});

var mergeAll = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = interopDefault(require$$1$7);
    var subscribeToResult_1 = interopDefault(require$$0$9);
    /**
     * Converts a higher-order Observable into a first-order Observable which
     * concurrently delivers all values that are emitted on the inner Observables.
     *
     * <span class="informal">Flattens an Observable-of-Observables.</span>
     *
     * <img src="./img/mergeAll.png" width="100%">
     *
     * `mergeAll` subscribes to an Observable that emits Observables, also known as
     * a higher-order Observable. Each time it observes one of these emitted inner
     * Observables, it subscribes to that and delivers all the values from the
     * inner Observable on the output Observable. The output Observable only
     * completes once all inner Observables have completed. Any error delivered by
     * a inner Observable will be immediately emitted on the output Observable.
     *
     * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
     * var firstOrder = higherOrder.mergeAll();
     * firstOrder.subscribe(x => console.log(x));
     *
     * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
     * var firstOrder = higherOrder.mergeAll(2);
     * firstOrder.subscribe(x => console.log(x));
     *
     * @see {@link combineAll}
     * @see {@link concatAll}
     * @see {@link exhaust}
     * @see {@link merge}
     * @see {@link mergeMap}
     * @see {@link mergeMapTo}
     * @see {@link mergeScan}
     * @see {@link switch}
     * @see {@link zipAll}
     *
     * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
     * Observables being subscribed to concurrently.
     * @return {Observable} An Observable that emits values coming from all the
     * inner Observables emitted by the source Observable.
     * @method mergeAll
     * @owner Observable
     */
    function mergeAll(concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        return this.lift(new MergeAllOperator(concurrent));
    }
    exports.mergeAll = mergeAll;
    var MergeAllOperator = function () {
        function MergeAllOperator(concurrent) {
            this.concurrent = concurrent;
        }
        MergeAllOperator.prototype.call = function (observer, source) {
            return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
        };
        return MergeAllOperator;
    }();
    exports.MergeAllOperator = MergeAllOperator;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var MergeAllSubscriber = function (_super) {
        __extends(MergeAllSubscriber, _super);
        function MergeAllSubscriber(destination, concurrent) {
            _super.call(this, destination);
            this.concurrent = concurrent;
            this.hasCompleted = false;
            this.buffer = [];
            this.active = 0;
        }
        MergeAllSubscriber.prototype._next = function (observable) {
            if (this.active < this.concurrent) {
                this.active++;
                this.add(subscribeToResult_1.subscribeToResult(this, observable));
            } else {
                this.buffer.push(observable);
            }
        };
        MergeAllSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
        };
        MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            } else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeAllSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.MergeAllSubscriber = MergeAllSubscriber;
    });

var mergeAll$1 = interopDefault(mergeAll);
var MergeAllSubscriber = mergeAll.MergeAllSubscriber;
var MergeAllOperator = mergeAll.MergeAllOperator;
var mergeAll$$1 = mergeAll.mergeAll;


var require$$0$8 = Object.freeze({
    default: mergeAll$1,
    MergeAllSubscriber: MergeAllSubscriber,
    MergeAllOperator: MergeAllOperator,
    mergeAll: mergeAll$$1
});

var require$$0$8 = Object.freeze({
    default: mergeAll$1,
    MergeAllSubscriber: MergeAllSubscriber,
    MergeAllOperator: MergeAllOperator,
    mergeAll: mergeAll$$1
});

var require$$0$8 = Object.freeze({
    default: mergeAll$1,
    MergeAllSubscriber: MergeAllSubscriber,
    MergeAllOperator: MergeAllOperator,
    mergeAll: mergeAll$$1
});

var require$$0$8 = Object.freeze({
    default: mergeAll$1,
    MergeAllSubscriber: MergeAllSubscriber,
    MergeAllOperator: MergeAllOperator,
    mergeAll: mergeAll$$1
});

var require$$0$8 = Object.freeze({
    default: mergeAll$1,
    MergeAllSubscriber: MergeAllSubscriber,
    MergeAllOperator: MergeAllOperator,
    mergeAll: mergeAll$$1
});

var concat = createCommonjsModule(function (module, exports) {
    "use strict";

    var isScheduler_1 = interopDefault(require$$2$3);
    var ArrayObservable_1 = interopDefault(require$$1$4);
    var mergeAll_1 = interopDefault(require$$0$8);
    /**
     * Creates an output Observable which sequentially emits all values from every
     * given input Observable after the current Observable.
     *
     * <span class="informal">Concatenates multiple Observables together by
     * sequentially emitting their values, one Observable after the other.</span>
     *
     * <img src="./img/concat.png" width="100%">
     *
     * Joins this Observable with multiple other Observables by subscribing to them
     * one at a time, starting with the source, and merging their results into the
     * output Observable. Will wait for each Observable to complete before moving
     * on to the next.
     *
     * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
     * var timer = Rx.Observable.interval(1000).take(4);
     * var sequence = Rx.Observable.range(1, 10);
     * var result = timer.concat(sequence);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Concatenate 3 Observables</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var result = timer1.concat(timer2, timer3);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concatAll}
     * @see {@link concatMap}
     * @see {@link concatMapTo}
     *
     * @param {Observable} other An input Observable to concatenate after the source
     * Observable. More than one input Observables may be given as argument.
     * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
     * Observable subscription on.
     * @return {Observable} All values of each passed Observable merged into a
     * single Observable, in order, in serial fashion.
     * @method concat
     * @owner Observable
     */
    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        return concatStatic.apply(void 0, [this].concat(observables));
    }
    exports.concat = concat;
    /* tslint:enable:max-line-length */
    /**
     * Creates an output Observable which sequentially emits all values from every
     * given input Observable after the current Observable.
     *
     * <span class="informal">Concatenates multiple Observables together by
     * sequentially emitting their values, one Observable after the other.</span>
     *
     * <img src="./img/concat.png" width="100%">
     *
     * Joins multiple Observables together by subscribing to them one at a time and
     * merging their results into the output Observable. Will wait for each
     * Observable to complete before moving on to the next.
     *
     * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
     * var timer = Rx.Observable.interval(1000).take(4);
     * var sequence = Rx.Observable.range(1, 10);
     * var result = Rx.Observable.concat(timer, sequence);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Concatenate 3 Observables</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var result = Rx.Observable.concat(timer1, timer2, timer3);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concatAll}
     * @see {@link concatMap}
     * @see {@link concatMapTo}
     *
     * @param {Observable} input1 An input Observable to concatenate with others.
     * @param {Observable} input2 An input Observable to concatenate with others.
     * More than one input Observables may be given as argument.
     * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
     * Observable subscription on.
     * @return {Observable} All values of each passed Observable merged into a
     * single Observable, in order, in serial fashion.
     * @static true
     * @name concat
     * @owner Observable
     */
    function concatStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var scheduler = null;
        var args = observables;
        if (isScheduler_1.isScheduler(args[observables.length - 1])) {
            scheduler = args.pop();
        }
        return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
    }
    exports.concatStatic = concatStatic;
    });

var concat$1 = interopDefault(concat);
var concatStatic = concat.concatStatic;
var concat$$1 = concat.concat;


var require$$1$6 = Object.freeze({
    default: concat$1,
    concatStatic: concatStatic,
    concat: concat$$1
});

var require$$1$6 = Object.freeze({
    default: concat$1,
    concatStatic: concatStatic,
    concat: concat$$1
});

var require$$1$6 = Object.freeze({
    default: concat$1,
    concatStatic: concatStatic,
    concat: concat$$1
});

var require$$1$6 = Object.freeze({
    default: concat$1,
    concatStatic: concatStatic,
    concat: concat$$1
});

var require$$1$6 = Object.freeze({
    default: concat$1,
    concatStatic: concatStatic,
    concat: concat$$1
});

var startWith$2 = createCommonjsModule(function (module, exports) {
    "use strict";

    var ArrayObservable_1 = interopDefault(require$$1$4);
    var ScalarObservable_1 = interopDefault(require$$2$2);
    var EmptyObservable_1 = interopDefault(require$$1$5);
    var concat_1 = interopDefault(require$$1$6);
    var isScheduler_1 = interopDefault(require$$2$3);
    /**
     * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
     * source Observable.
     *
     * <img src="./img/startWith.png" width="100%">
     *
     * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
     * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
     * emitted by the source Observable.
     * @method startWith
     * @owner Observable
     */
    function startWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        } else {
            scheduler = null;
        }
        var len = array.length;
        if (len === 1) {
            return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
        } else if (len > 1) {
            return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
        } else {
            return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
        }
    }
    exports.startWith = startWith;
    });

var startWith$3 = interopDefault(startWith$2);
var startWith$$1 = startWith$2.startWith;


var require$$0$7 = Object.freeze({
    default: startWith$3,
    startWith: startWith$$1
});

var require$$0$7 = Object.freeze({
    default: startWith$3,
    startWith: startWith$$1
});

var require$$0$7 = Object.freeze({
    default: startWith$3,
    startWith: startWith$$1
});

var require$$0$7 = Object.freeze({
    default: startWith$3,
    startWith: startWith$$1
});

var require$$0$7 = Object.freeze({
    default: startWith$3,
    startWith: startWith$$1
});

var startWith = createCommonjsModule(function (module) {
  "use strict";

  var Observable_1 = interopDefault(require$$1);
  var startWith_1 = interopDefault(require$$0$7);
  Observable_1.Observable.prototype.startWith = startWith_1.startWith;
  });

interopDefault(startWith);

var scan$2 = createCommonjsModule(function (module, exports) {
    "use strict";

    var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = interopDefault(require$$0$1);
    /**
     * Applies an accumulator function over the source Observable, and returns each
     * intermediate result, with an optional seed value.
     *
     * <span class="informal">It's like {@link reduce}, but emits the current
     * accumulation whenever the source emits a value.</span>
     *
     * <img src="./img/scan.png" width="100%">
     *
     * Combines together all values emitted on the source, using an accumulator
     * function that knows how to join a new source value into the accumulation from
     * the past. Is similar to {@link reduce}, but emits the intermediate
     * accumulations.
     *
     * Returns an Observable that applies a specified `accumulator` function to each
     * item emitted by the source Observable. If a `seed` value is specified, then
     * that value will be used as the initial value for the accumulator. If no seed
     * value is specified, the first item of the source is used as the seed.
     *
     * @example <caption>Count the number of click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var ones = clicks.mapTo(1);
     * var seed = 0;
     * var count = ones.scan((acc, one) => acc + one, seed);
     * count.subscribe(x => console.log(x));
     *
     * @see {@link expand}
     * @see {@link mergeScan}
     * @see {@link reduce}
     *
     * @param {function(acc: R, value: T, index: number): R} accumulator
     * The accumulator function called on each source value.
     * @param {T|R} [seed] The initial accumulation value.
     * @return {Observable<R>} An observable of the accumulated values.
     * @method scan
     * @owner Observable
     */
    function scan(accumulator, seed) {
        return this.lift(new ScanOperator(accumulator, seed));
    }
    exports.scan = scan;
    var ScanOperator = function () {
        function ScanOperator(accumulator, seed) {
            this.accumulator = accumulator;
            this.seed = seed;
        }
        ScanOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
        };
        return ScanOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var ScanSubscriber = function (_super) {
        __extends(ScanSubscriber, _super);
        function ScanSubscriber(destination, accumulator, seed) {
            _super.call(this, destination);
            this.accumulator = accumulator;
            this.index = 0;
            this.accumulatorSet = false;
            this.seed = seed;
            this.accumulatorSet = typeof seed !== 'undefined';
        }
        Object.defineProperty(ScanSubscriber.prototype, "seed", {
            get: function get() {
                return this._seed;
            },
            set: function set(value) {
                this.accumulatorSet = true;
                this._seed = value;
            },
            enumerable: true,
            configurable: true
        });
        ScanSubscriber.prototype._next = function (value) {
            if (!this.accumulatorSet) {
                this.seed = value;
                this.destination.next(value);
            } else {
                return this._tryNext(value);
            }
        };
        ScanSubscriber.prototype._tryNext = function (value) {
            var index = this.index++;
            var result;
            try {
                result = this.accumulator(this.seed, value, index);
            } catch (err) {
                this.destination.error(err);
            }
            this.seed = result;
            this.destination.next(result);
        };
        return ScanSubscriber;
    }(Subscriber_1.Subscriber);
    });

var scan$3 = interopDefault(scan$2);
var scan$$1 = scan$2.scan;


var require$$0$10 = Object.freeze({
    default: scan$3,
    scan: scan$$1
});

var require$$0$10 = Object.freeze({
    default: scan$3,
    scan: scan$$1
});

var require$$0$10 = Object.freeze({
    default: scan$3,
    scan: scan$$1
});

var require$$0$10 = Object.freeze({
    default: scan$3,
    scan: scan$$1
});

var require$$0$10 = Object.freeze({
    default: scan$3,
    scan: scan$$1
});

var scan = createCommonjsModule(function (module) {
  "use strict";

  var Observable_1 = interopDefault(require$$1);
  var scan_1 = interopDefault(require$$0$10);
  Observable_1.Observable.prototype.scan = scan_1.scan;
  });

interopDefault(scan);

function createRxStore(reducer, initialState) {
  var action$ = new Subject$$1();
  var state$ = action$.startWith(initialState).scan(reducer);
  return {
    action$: action$,
    state$: state$,
    dispatch: function dispatch(action) {
      return action$.next(action);
    },
    subscribe: function subscribe() {
      return state$.subscribe.apply(state$, arguments);
    }
  };
}

export { createRxStore };