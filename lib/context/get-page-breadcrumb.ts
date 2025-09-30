import type * as types from './types'

export const getPageBreadcrumb = (
  recordMap: types.ExtendedRecordMap | undefined,
  site: types.Site,
  pageInfo?: types.PageInfo | null,
  startPageId?: string
): types.BreadcrumbItem[] | null => {
  if (!recordMap || !site) {
    return null
  }

  const blockId = startPageId || Object.keys(recordMap.block)[0]
  const block = recordMap.block[blockId]?.value

  if (!block) {
    return null
  }

  const breadcrumbs = []

  let currentBlock = block
  while (currentBlock) {
    const title = currentBlock.properties?.title?.[0]?.[0]
    const page = pageInfo?.pageId === currentBlock.id ? pageInfo : null

    breadcrumbs.unshift({
      pageId: currentBlock.id,
      title: title || 'Untitled',
      pageInfo: page as types.PageInfo
    })

    if (currentBlock.id === site.rootNotionPageId) {
      break
    }

    currentBlock = recordMap.block[currentBlock.parent_id]?.value
  }

  // The first breadcrumb is the site name
  if (breadcrumbs.length > 0 && breadcrumbs[0].pageId === site.rootNotionPageId) {
    breadcrumbs[0].title = site.name
  }

  return breadcrumbs.length > 0 ? breadcrumbs : null
}
