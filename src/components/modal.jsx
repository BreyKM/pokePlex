import React from "react";
import "../css/modal.scss";
import { closeModal } from "../slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "../fromAPI/pokemonApi";
import { useGetPokemonSpeciesByNameQuery } from "../fromAPI/pokemonApi";

export default function Modal() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.pokemonName);

  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);

  return (
    <>
      <aside className="modal">
        <div className="overlay">
          <div className="modal-content">
            <button
              className="closeModal"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <i className="fa fa-close"></i>
            </button>
            <div className="poke-name-modal">{data.name}</div>
            <div className="modal-flex">
              <BasicInfoModal />
              <BioModal  />
              <TrainingModal />
            </div>

            <StatsModal />
          </div>
        </div>
      </aside>
    </>
  );
}

export function StatsModal() {
  const name = useSelector((state) => state.pokemonName);

  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);
  return (
    <div className="leftModal-container">
      <h1 className="stats-header">Stats</h1>
      <div className="stats">
        {data.stats.map((stat, index) => {
          return (
            <div key={index} className="stat">
              <div className="stat-name">{stat.stat.name}</div>
              <div className="stat-value">{stat.base_stat}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BioModal() {
  const name = useSelector((state) => state.pokemonName);

  const { data, error, isLoading } = useGetPokemonSpeciesByNameQuery(name);

  return (
    <div className="bio-container">
      <div className="bio">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            {data.flavor_text_entries.length > 0 &&
            data.flavor_text_entries.filter(
              (element) => element.language.name === "en"
            ) != []
              ? data.flavor_text_entries
                  .filter((element) => element.language.name === "en")[0]
                  .flavor_text.replace("\f", "\n")
                  .toLowerCase()
              : "no description available"}
          </div>
        )}
      </div>
    </div>
  );
}

export function TypesModal() {
  const name = useSelector((state) => state.pokemonName);
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);

  return (
    <div className="types-container">
      <div className="types">
        {data.types.map((type, index) => {
          return (
            <div key={index} className={`type-modal ${type.type.name}-modal`}>
              <div className="type-name">{type.type.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AbilitiesModal() {
  const name = useSelector((state) => state.pokemonName);
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);

  return (
    <div className="abilities-container">
      <div className="abilities">
        {data.abilities.map((ability, index) => {
          return (
            <div
              key={index}
              className={`ability-modal ${ability.ability.name}`}
            >
              <div className="ability-name">{ability.ability.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BasicInfoModal() {
  const name = useSelector((state) => state.pokemonName);
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);

  return (
    <div className="basic-info-container">
      <div className="basic-info">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="poke-id">ID: #{data.id}</div>
            <div className="height">Height: {data.height / 10} m</div>
            <div className="weight">Weight: {data.weight / 10} kg</div>
            <AbilitiesModal />
            <TypesModal />
          </>
        )}
      </div>
    </div>
  );
}

export function TrainingModal() {
  const name = useSelector((state) => state.pokemonName);
  const { data, error, isLoading, isFetching } =
    useGetPokemonSpeciesByNameQuery(name);

  return (
    <div className="training-container">
      <div className="training">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="catch-rate">Capture Rate: {data.capture_rate}</div>
            <div className="base-happy">
              Base Happiness: {data.base_happiness}
            </div>
            <BaseExp />
            <div className="growth-rate">
              Growth Rate: {data.growth_rate.name}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function BaseExp() {
  const name = useSelector((state) => state.pokemonName);
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);

  return (
    <div className="base-exp-container">
      <div className="base-exp">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="catch-rate">Base XP: {data.base_experience}</div>
          </>
        )}
      </div>
    </div>
  );
}
