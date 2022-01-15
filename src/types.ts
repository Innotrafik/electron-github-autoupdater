import { autoUpdater } from 'electron'
import { eventTypes } from './constants'

export type AutoUpdateDownloadProgress = {
  size: number
  progress: number
  percent: number
}

export type AutoUpdateRepoConfig = {
  baseUrl: string
  owner: string
  repo: string
  accessToken: string
}

export interface GithubRelease {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  author: GithubReleaseAssetAuthor
  prerelease: boolean
  created_at: string
  published_at: string
  assets: GithubReleaseAsset[]
  tarball_url: string
  zipball_url: string
  body: string
}

export interface GithubReleaseAsset {
  url: string
  id: number
  node_id: string
  name: string
  label?: any
  uploader: GithubReleaseAssetAuthor
  content_type: string
  state: string
  size: number
  download_count: number
  created_at: string
  updated_at: string
  browser_download_url: string
}

export interface GithubReleaseAssetAuthor {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export type ElectronGithubAutoUpdaterEvent = typeof eventTypes[number]

export type ElectronGithubAutoUpdaterIpcEvent = {
  eventName: ElectronGithubAutoUpdaterEvent
  eventDetails?: any
}
