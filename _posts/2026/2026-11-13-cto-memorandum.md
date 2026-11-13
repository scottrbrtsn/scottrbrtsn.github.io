**MEMORANDUM**

**TO:** All Engineering, Architecture, and Delivery Leads

**FROM:** Office of the CTO

**DATE:** November 13, 2026

**SUBJECT:** Engineering Policy: The Client Gravity Rule, Environment Standards, and Agentic Tooling

---

### Purpose

As we scale from 50 to 250 engineers, our greatest operational risk is allowing internal tooling preferences—or over-reliance on automation—to create delivery friction, hidden maintenance debt, or security exposure on client accounts. Effective immediately, all technical leads and engineers will govern project setup, local development environments, build pipelines, and agentic workflows under **The Client Gravity Rule**.

### Core Principle: The Client Gravity Rule

**A client engagement’s tooling must orbit the client’s operational reality, technical maturity, and handover constraints—never our internal engineering preferences.**

We do not bill clients to subsidize our architectural curiosity, nor do we force high-abstraction infrastructure onto environments that neither require nor support it. Every tooling decision must optimize for three outcomes: **speed to first commit**, **low-friction team onboarding**, and **clean client handover**.

---

### Operational Mandates

#### 1. Laptop Operating Systems (No Mandatory OS Standardization)

* **Standard Linux / macOS:** Corporate laptops will run standard, well-supported operating systems compatible with enterprise VPNs, endpoint security agents, and standard developer tooling.
* **No Mandatory NixOS:** We will not mandate NixOS or experimental operating systems on consultant hardware. Engineering time must be spent solving client business problems, not debugging local OS packaging quirks.

#### 2. Environment Selection Tiers

Tech leads must select the lightest environment abstraction that guarantees reproducibility without fighting the client’s target runtime:

| Engagement Context | Approved Default Tooling | Prohibited Abstractions |
| --- | --- | --- |
| **Managed Cloud & VDI Accounts** *(e.g., Databricks, Snowflake, locked Windows VDIs)* | Native client runtimes, lightweight virtual environments (`uv`, `venv`), and official vendor CLIs. | Custom container wrappers, Nix derivations, or local emulation layers that diverge from the VDI/cloud runtime. |
| **Standard Web, Data & Microservice Apps** *(e.g., Python, Node, Go, Java)* | Language-native lockfiles (`uv.lock`, `package-lock.json`) paired with standard Docker Compose or Devcontainers. | Over-engineered custom build systems or non-standard package managers the client’s team cannot maintain. |
| **Complex Polyglot & Systems Engineering** *(e.g., C++/Rust cross-compilation, multi-language monorepos)* | Opt-in, isolated per-client **Nix dev-shells** (`flake.nix`) backed by our shared binary cache, outputting standard client-readable artifacts. | Uncached custom derivations or coupled dependency graphs that trigger local source rebuilds. |

#### 3. Autonomous Coding Agents (Accelerators, Not Autopilot)

AI coding agents are force multipliers for execution, not substitutes for architectural discipline or human accountability:

* **No Complexity Laundering:** Never use agent swarms to justify introducing over-engineered stacks (such as bespoke Nix overlays or brittle wrappers) under the assumption that "agents will maintain it." Clean, standard architectures make agents 10x faster; over-engineered architectures turn agents into high-speed chaos generators.
* **Client Perimeter & Compliance First:** Engineers must strictly respect client NDA, data residency, and VDI boundaries regarding approved agentic tools, and maintain the capability to operate effectively in restricted client environments without agent crutches.
* **Human Ownership of Outcomes:** Engineers own every line of code, dependency lockfile, and infrastructure configuration committed under their name—especially changes affecting cloud spend, IAM permissions, or security posture. Never ship unverified agent output.

#### 4. The 30-Minute Onboarding Standard

Regardless of the stack chosen, every repository must pass the **30-Minute Rule**: any engineer rolling onto an account must be able to clone the repository, execute a single documented setup command, and run the test suite locally within 30 minutes. Tribal knowledge and multi-day environment debugging are unacceptable.

#### 5. The Handover Litmus Test

Before introducing any build tool, orchestration layer, or dependency manager into a client codebase, the Tech Lead must answer: *"If we hand this repository to the client’s internal engineering team tomorrow, can they build, test, and deploy it without hiring us back to explain the tooling?"* If the answer is **no**, simplify the stack.

---

### Governance & Exceptions

* **Default Autonomy:** Tech leads have full authority to choose tools within the tiers above without formal architecture review.
* **Exception Process:** Requests to introduce specialized tooling (such as custom Nix build pipelines or non-standard OS setups) on client engagements require written sign-off from the VP of Engineering, demonstrating measurable time savings and explicit client alignment.

Tools—whether Nix, Docker, or fleets of autonomous agents—multiply the quality of the underlying engineering judgment. Clients hire us because when their budgets are burning, their org charts are shifting, and their systems are messy, a senior engineer steps in, makes the pragmatic call, and owns the result. Keep the stacks clean, use your agents to eliminate grunt work, and verify everything you ship.
