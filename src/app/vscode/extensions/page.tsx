import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Extensions',
}

export default async function Extensions() {
  {/* @ts-expect-error Server Component */}
  return <GistContent gistUrl="https://gist.githubusercontent.com/wenblack/4e01d7bf787d60d7276dc5119a9dcf71/raw/extensions.json" />
}