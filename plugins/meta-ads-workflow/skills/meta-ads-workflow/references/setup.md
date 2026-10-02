# Connect a company’s Meta account

Use this only for first setup or recovery. The skill works without Meta access for local planning and creative production.

## Prerequisites

Bring Codex with MCP support, the company’s Meta ad-account ID, authorized user access, and the Page/Instagram identities the ads will use. Conversion campaigns also need an appropriate dataset/event and a separately verified measurement path. Existing company assets and developer apps should be reused when suitable; do not create a new business or request full admin access as a default fix.

Check the company’s current Meta eligibility and permissions in Meta’s documentation and UI. Business asset assignments, developer-app roles, token scopes and MCP eligibility are separate. Access to one company never authorizes another company’s account.

## OAuth route

First inspect `codex mcp list` so an existing named connection is not overwritten. With authorization to add the company connection, check `codex mcp add --help` and use a distinct name if one already exists:

```sh
codex mcp add meta-ads --url https://mcp.facebook.com/ads
codex mcp login meta-ads
```

Complete authentication in the trusted Meta flow. If Meta requires an approved OAuth client, use that company’s configured client ID and the current Codex options. Do not invent a client ID or promise dynamic registration works in every host. `invalid_client_metadata` and `No authorization support detected` mean connection setup needs attention, not that the campaign should be rebuilt.

## Bearer-token alternative

Only when supported for this company by Meta, an authorized administrator can create an appropriate user token through Meta’s tools. Confirm the required permissions there. Never ask the user to paste it into the conversation, a command argument, a repository file or a screenshot.

Configure a reference to an environment variable, not the credential itself:

```sh
codex mcp add meta-ads --url https://mcp.facebook.com/ads --bearer-token-env-var META_ADS_ACCESS_TOKEN
```

If this name is already configured, inspect and update that specific connection using the current client’s supported workflow rather than duplicating it. In the user’s own interactive Bash or Zsh terminal, hidden input can launch a CLI session without putting the token in shell history:

```sh
read -r -s META_ADS_ACCESS_TOKEN
export META_ADS_ACCESS_TOKEN
codex
unset META_ADS_ACCESS_TOKEN
```

Enter only the token when `read` waits. Do not enable shell tracing or dump the environment. This supplies the child CLI process; it does not inject credentials into an already-running desktop app. Use the desktop client’s supported authentication flow when working there. Token storage, refresh and expiry remain the company’s responsibility.

## Prove the connection

Discover tools through the host and inspect current schemas. Use the account-list/read capability (historically `ads_get_ad_accounts`) to find the exact target ID, following pagination when needed. Verify name, currency, account timezone, usable/queryable/MCP-enabled status and the required assets. Then read relevant existing campaigns and overlapping spend. Log only selected non-secret facts and a timestamp.

A tool catalogue proves discovery only. A successful read does not prove publishing permission, payment readiness, review approval, tracking quality or actual delivery. Resolve missing access with the correct administrator. If expired credentials block reporting, say data is unavailable; ads may still be spending.

## Sources and maintenance

- [Meta Ads MCP overview](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-overview)
- [Meta endpoint metadata](https://mcp.facebook.com/.well-known/oauth-protected-resource/ads)
- [Codex MCP documentation](https://developers.openai.com/codex/mcp/)

Checked October 2, 2026: Meta’s unauthenticated endpoint returns an authentication challenge and OAuth resource metadata. Metadata advertises header bearer tokens and includes `ads_mcp_management`; requested scopes and asset eligibility must still be checked for the intended operation. Codex CLI help confirms URL, bearer-environment-variable and OAuth-client options. This check did not authenticate or exercise a customer account. Tool contracts can change: current provider schemas govern execution.
