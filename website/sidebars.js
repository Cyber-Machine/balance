/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


/*
TODO: change to Manual configuration, which is more recommended:
https://staticdocs.internalfb.com/staticdocs/docs/documenting/create-a-page/#manual-configuration---recommended
*/
module.exports = {
  docsSidebar: [
    {
          type: 'autogenerated',
          dirName: 'docs',
    },
  ],
  tutorialsSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tutorials',
    },
  ]
};