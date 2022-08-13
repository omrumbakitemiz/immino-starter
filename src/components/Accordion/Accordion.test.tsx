import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import Accordion from './Accordion';

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title="Testing">
        <h4>Content</h4>
      </Accordion>,
    );
  });

  test('should show title all the time', () => {
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });

  test('should not show the content at the start', () => {
    const contentTexts = screen.queryAllByText(/Content/i);
    expect(contentTexts).toHaveLength(0);
  });

  test('should show the content on accordion click', async () => {
    const title = screen.getByText(/Show/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Content/i)).toBeDefined();
  });
});
