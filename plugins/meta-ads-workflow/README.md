# Meta Ads Workflow · v1.0.0

A reusable skill from Asad / Store of Scope. Bring your company’s brand, product context and campaign brief into Codex; prepare creative, create paused campaigns through Meta’s official Ads MCP when authorized, review, and learn from the results.

This package contains instructions and templates. It is not a Meta MCP server or an asset-generation service. It does not include Noodle Seed’s private design system, credentials, ad accounts or brand assets. Meta access, Codex, production tools and ad spend have their own requirements and costs. There is no promised setup time or campaign result.

## Install from the public repository

Use a current Codex CLI with plugin support:

```sh
codex plugin marketplace add asadatnoodle/store-of-scope-plugins
codex plugin add meta-ads-workflow@store-of-scope
```

If that marketplace is already registered, run `codex plugin marketplace upgrade store-of-scope` to refresh it before installing the new entry. Open your company’s project in Codex and start a new task.

## Install the website download

Extract the complete `meta-ads-workflow` folder and keep it in a permanent location. From the outer folder containing `.agents` and `plugins`, run:

```sh
codex plugin marketplace add .
codex plugin add meta-ads-workflow@store-of-scope-meta-ads
```

Or copy the complete `plugins/meta-ads-workflow/skills/meta-ads-workflow` folder into your project’s `.agents/skills/`. Choose one route so the skill is not duplicated. Meta authentication is a separate step described in `skills/meta-ads-workflow/references/setup.md`; installation does not connect an ad account.

## First prompt

> Use $meta-ads-workflow to prepare an experimental Meta campaign for my company. Read our brand guidelines, design/content skills, product facts and existing assets first. Help me define the audience, offer, budget and test. Create the local brief, creative previews and review pack. Check my Meta connection when needed, but do not create remote campaigns or spend until I authorize that step.

## What you get

- A reusable company-to-campaign skill.
- Codex connection setup and authentication recovery guidance.
- Creative and experiment guidance, including a historical Noodle Seed example.
- Campaign brief and review record templates.
- Read-only reporting and measurement guidance.

Use or adapt these instructions commercially with the attribution in `LICENSE.txt`. Third-party brands and linked services retain their own rights. Start with `skills/meta-ads-workflow/SKILL.md`; read linked references only when needed.
