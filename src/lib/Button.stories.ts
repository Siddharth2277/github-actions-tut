import type { Meta, StoryObj } from "@storybook/svelte"
import { within, userEvent } from "@storybook/testing-library"

import Button from "$lib/Button.svelte"

export default {
	component: Button,
	args: {
		butContents: "Siddharth",
		size: "medium"
	},
	argTypes: {
		onClick: { action: "clicked" }
	}
} satisfies Meta<Button>

type Story = StoryObj<Button>

export const SimpleBut: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		await userEvent.click(canvas.getByRole("button"))
	}
}
