/**
 * @typedef {object} ButtonInterface
 * @property {import('react').ReactNode} children
 * @property {"button" | "submit"} type
 * @property {function} onClick
 * @property {boolean} disabled
 */

/**
 * @typedef {object} LoaderInterface
 * @property {"dots"} type
 */

/**
 * @typedef {object} ImageInterface
 * @property {string} name
 */

/**
 * @typedef {object} WidgetRootInterface
 * @property {import('react').ReactNode} children
 */

/**
 * @typedef {object} WidgetLabelInterface
 * @property {string} label
 */

/**
 * @typedef {object} WidgetButtonInterface
 * @property {function} onClick
 */

/**
 * @typedef {object} AiChatInterface
 * @property {import('react').ReactNode} children
 */

/**
 * @typedef {object} AiChatInputInterface
 * @property {string} placeholder
 */

/**
 * @typedef {object} AiChatMsgInterface
 * @property {"ai" | "usr"} type
 * @property {string} content
 * @property {string} time
 */

/**
 * @typedef {object} IconInterface
 * @property {string} name
 */

export {};
