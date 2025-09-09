"use strict";
const splitStory = (story) => {
    var _a;
    const sentences = ((_a = story.match(/[^.!?]+[.!?]+/g)) === null || _a === void 0 ? void 0 : _a.map((s) => s.trim())) || [];
    return sentences;
};
