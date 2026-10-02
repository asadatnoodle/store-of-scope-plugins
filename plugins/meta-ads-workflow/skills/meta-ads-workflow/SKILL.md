---
name: meta-ads-workflow
description: Use when a company wants to plan, create, review, or report on experimental Facebook and Instagram campaigns from Codex using Meta’s official Ads MCP and its own brand and content system.
---

# Meta ads workflow

Turn a company brief into branded creative and a reviewable Meta campaign from one Codex conversation. This skill supplies the process; Meta hosts the Ads MCP at `https://mcp.facebook.com/ads`. It does not deploy a server, grant account access, or include a creative-generation service.

## Start from the company

Read the current project instructions, brand skill or guide, approved assets, product facts, offer and destination. Use existing work before asking for missing inputs. Preserve the company’s identity; the Noodle Seed example is not a brand template. If there is no brand system, agree a small direction or use an available branding skill before producing variants.

Copy [the campaign brief](references/campaign-brief.md) into a task output folder and fill the fields that affect the requested work. Clearly separate proposed values from approved ones. Clarify unresolved account, currency, total versus daily/lifetime budget, dates/timezone, audience, offer or launch authority before dependent Meta writes. Continue local creative work when access is blocked.

## Connect only when needed

For first setup or an authentication failure, read [connection setup](references/setup.md). A saved endpoint, login screenshot or `tools/list` result is not proof of access to the intended ad account. Inspect the current tool schemas and make an authenticated account read. Match the account ID, currency, timezone, eligibility and required Page/Instagram/dataset access. Keep tokens out of conversations and artifacts.

## Produce the creative

Follow [creative and experiments](references/creative-and-experiments.md). Use the company’s own design/content skills and available production tools to generate copy, static or motion assets. Render one representative creative first, then build the requested variants. Preserve editable sources, asset rights, exact destinations, tracking tags and meaningful phone-size previews. Any paid production requires authorization for its cost.

## Build a reviewable campaign

Use current MCP tools and their schemas, not remembered argument names. Campaign creation is a remote write even when paused; require authorization for that step. Default authorized builds to explicitly paused campaigns, ad sets and ads. These are real Meta objects, not local drafts. If the user asked for local work only, produce the package without creating objects.

Keep countries and test cells separate when their budgets or measurement differ. Do not turn a total allocation into a daily budget or imply it caps other account activity. Media may require a separately authorized Graph API upload or manual upload if the current MCP client cannot upload local files. Do not invent media IDs or targeting IDs.

Save returned IDs, asset hashes, settings and redacted receipts. Read back the full hierarchy, effective statuses, previews, schedules, budgets, destinations and provider errors. For a timeout or unknown write outcome, reconcile by returned IDs or a scoped search before retrying; never blindly recreate objects.

Use [the review record](references/review-record.md) to hand off the creative and verified state. Changes to creative or budgets invalidate the affected approval. Activation is a separate, specific decision about the selected objects, allocation and schedule; preserve existing valid user authorization without asking twice. If activation is unsupported, give a precise Ads Manager handoff. Verify effective status afterward; active, approved and delivering are different states.

## Learn and repeat

For performance requests read [reporting](references/reporting.md). Report a precise cutoff, attribution and uncertainty; connect Meta metrics to first-party business outcomes only when that evidence exists. Scheduling a report or making optimization changes needs its own authorization. Update the next hypothesis from observed results, not a small-sample winner badge.

Return the brief, editable creative/previews, review record and requested report. State what is local, created, paused, activated or unverified, and the next useful action.
