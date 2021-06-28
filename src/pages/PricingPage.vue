<template>
  <section-card heading="Pricing Proposal">
    <pricing-proposal></pricing-proposal>
  </section-card>
</template>

<script>
import SectionCard from "../components/SectionCard.vue";
import PricingProposal from "../components/pricing-page/PricingPage.vue";

export default {
  components: {
    SectionCard,
    PricingProposal,
  },
};
</script>
