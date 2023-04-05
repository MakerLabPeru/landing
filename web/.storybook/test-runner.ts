import {compose, map, path, defaultTo} from 'ramda';
import {TestRunnerConfig, getStoryContext} from '@storybook/test-runner';
import {toMatchImageSnapshot} from 'jest-image-snapshot';

const customSnapshotsDir = `${__dirname}/__snapshots__`;

const extractViewports = compose(
  Object.fromEntries,
  map(([screen, {styles}]) => [screen, map(parseInt, styles)]),
  Object.entries,
  defaultTo({}),
  path(['parameters', 'viewport', 'viewports']),
);

const waitForAnimations = page =>
  page
    .locator('#storybook-root')
    .evaluate(e =>
      Promise.all(
        e.getAnimations({subtree: true}).map(animation => animation.finished),
      ),
    );

export default {
  setup() {
    expect.extend({toMatchImageSnapshot});
  },
  async preRender(page, context) {
    const storyContext = await getStoryContext(page, context);
    const viewports = extractViewports(storyContext);

    const {defaultViewport} = storyContext?.parameters?.testRunner ?? {};

    const defaultViewportDimensions = viewports?.[defaultViewport];

    if (!defaultViewportDimensions) {
      return;
    }

    await page.setViewportSize(defaultViewportDimensions);
  },
  async postRender(page, context) {
    const storyContext = await getStoryContext(page, context);
    const viewports = extractViewports(storyContext);

    const screenshotsConfig = storyContext?.parameters?.testRunner
      ?.screenshots ?? {disable: false, viewports: []};

    if (!screenshotsConfig) {
      return;
    }

    for (const viewport of screenshotsConfig.viewports) {
      await page.setViewportSize(viewports[viewport]);

      await waitForAnimations(page);

      const image = await page.screenshot({
        scale: 'css',
        type: 'png',
      });

      expect(image).toMatchImageSnapshot({
        customSnapshotsDir,
        customSnapshotIdentifier: `${context.id}__${viewport}`,
      });
    }
  },
} as TestRunnerConfig;
