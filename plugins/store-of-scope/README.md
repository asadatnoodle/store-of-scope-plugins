# Store of Scope plugin

Store of Scope turns configured Gmail newsletters into a reviewable archive, concise reading editions, and a recurring reading habit.

## Availability

Version `0.1.0` is available through the public Store of Scope GitHub marketplace for manual installation in Codex and supported ChatGPT desktop surfaces. Submission to the universal public Plugins Directory is a separate release step. The plugin contains no Google or Noodle credentials.

Users install Store of Scope—not Noodle Seed. During first-run setup, the plugin guides the user to connect:

- Gmail, required for newsletter search and optional approved delivery;
- Google Calendar, optional for one managed reading event; and
- Google Drive, optional for user-owned artifact copies.

Google authorization remains a separate, explicit host action.

## First run

Start a fresh Codex task and use:

```text
Set up Store of Scope.
```

The setup skill validates dependencies, previews Gmail counts, obtains separate ingestion and delivery approvals, and proposes one daily automation in the configured timezone. When scheduled tasks are unavailable, it configures an honest manual-mode handoff.

## Package maintenance

Regenerate the Noodle-owned product skill after changing the MCP `agentGuide`, then synchronize it into this plugin:

```bash
npm exec --prefix apps/store-of-scope-mcp -- noodle agents setup --write --regenerate-app-skill --json
node plugins/store-of-scope/scripts/sync-noodle-product-skill.mjs
```

Validate before installation or distribution:

```bash
python3 /Users/asadiqbal/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py plugins/store-of-scope
node --test test/plugin-package.test.mjs
```
