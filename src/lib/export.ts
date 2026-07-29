import { toPng } from 'html-to-image'

export async function exportNodeToPng(
  node: HTMLElement,
  filename: string,
  pixelRatio = 2,
) {
  const dataUrl = await toPng(node, {
    cacheBust: true,
    pixelRatio,
    backgroundColor: undefined,
  })

  const link = document.createElement('a')
  link.download = `${filename}.png`
  link.href = dataUrl
  link.click()
}
