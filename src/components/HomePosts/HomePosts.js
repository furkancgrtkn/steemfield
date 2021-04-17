import React, { useState } from "react";
import {
  HomePosts as Container,
  FilterButtons,
  FilterButtonsItem,
  FilterButton,
} from "./styled";

function HomePosts() {
  const [filter, setFilter] = useState("new");
  return (
    <Container>
      <FilterButtons>
        <FilterButtonsItem>
          <FilterButton
            active={filter === "new" ? true : false}
            onClick={() => setFilter("new")}
          >
            New
          </FilterButton>
        </FilterButtonsItem>
        <FilterButtonsItem>
          <FilterButton
            active={filter === "trend" ? true : false}
            onClick={() => setFilter("trend")}
          >
            Trending
          </FilterButton>
        </FilterButtonsItem>
        <FilterButtonsItem>
          <FilterButton
            active={filter === "payout" ? true : false}
            onClick={() => setFilter("payout")}
          >
            Payouts
          </FilterButton>
        </FilterButtonsItem>
        <FilterButtonsItem>
          <FilterButton
            active={filter === "muted" ? true : false}
            onClick={() => setFilter("muted")}
          >
            Muted
          </FilterButton>
        </FilterButtonsItem>
      </FilterButtons>
    </Container>
  );
}

export default HomePosts;
