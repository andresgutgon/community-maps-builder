import { useEffect, useMemo, useState } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { ValidationMode, JsonSchema, VerticalLayout } from '@jsonforms/core'
import { JsonFormsStyleContext } from '@jsonforms/vanilla-renderers'
import { JsonForms } from '@jsonforms/react'

import { useMapData } from '@maps/components/CommunityProvider'
import type { Place, PlaceDetail } from '@maps/types/index'
import Button, { Size as ButtonSize, Types as ButtonType, Styles as ButtonStyles } from '@maps/components/Button'
import { useGetForm } from '@maps/components/CustomJsonForms/hooks/useForm'

import SubmissionForm from '@maps/components/PlacePopup/SubmissionForm'
import displayRenderers from '@maps/components/CustomJsonForms/displayRenderers'
import { Loading } from '@maps/components/PlacePopup'
import { displayStyles } from '@maps/components/CustomJsonForms/displayStyles'

const noValidationMode = 'NoValidation' as ValidationMode

type UseSchemaProps = { place: PlaceDetail }
type ReturnType = {
  present: boolean,
  data: any,
  jsonSchema: JsonSchema,
  uischema: VerticalLayout
}
const useSchema = ({ place }: UseSchemaProps) => useMemo(
  () => {
    const { schemaData, jsonSchema, uiSchema } = place
    return ({
      present: !!schemaData && !!jsonSchema && !!uiSchema,
      data: schemaData,
      jsonSchema,
      uiSchema
    })
  },
  [place]
)

const GOOGLE_DIRECTIONS_URL_BASE = 'https://www.google.com/maps/dir/?api=1&'
type HeaderProps = {
  name: string
  lat: string
  lng: string
  address: string | null
}
const Header = ({ name, address, lat, lng }: HeaderProps) => {
  return (
    <div className='space-y-1 pb-2 border-b border-gray-200'>
      <h2 className='text-xl font-medium text-gray-700'>{name}</h2>
      <div className='text-xs text-gray-600'>
        {address ? `${address} - ` : null}
        <a
          className='text-gray-800 font-medium underline'
          href={`${GOOGLE_DIRECTIONS_URL_BASE}&destination=${lat},${lng}`}
          rel='noreferrer'
          target="_blank"
        >
          <FormattedMessage defaultMessage='Cómo llegar' id='vD8ftS' />
        </a>
      </div>
    </div>
  )
}

type PlaceContentProps = {
  isModalLoading: boolean,
  onClick: () => void,
  place: PlaceDetail
}
const PlaceContent = ({ place, isModalLoading, onClick }: PlaceContentProps) => {
  const form = useGetForm({ place })
  const intl = useIntl()
  const schema = useSchema({ place })
  const { name, address, lat, lng } = place
  const button = intl.formatMessage({ id: 'IOnTHc', defaultMessage: 'Participar' })
  const buttonLoading = `${intl.formatMessage({ id: 'm9eXO9', defaultMessage: 'Cargando' })}...`
  const buttonLabel = isModalLoading ? buttonLoading : form?.ctaLabel || button
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col space-y-2 p-3'>
        <Header lat={lat} lng={lng} name={name} address={address} />
        {schema.present ? (
          <JsonFormsStyleContext.Provider value={displayStyles}>
            <JsonForms
              schema={schema.jsonSchema}
              uischema={schema.uiSchema}
              data={schema.data}
              renderers={displayRenderers}
              validationMode={noValidationMode}
            />
          </JsonFormsStyleContext.Provider>
        ) : null}
      </div>
      {place.form_slug ? (
        <div className='flex justify-end py-2 px-3 border-t border-gray-100 bg-gray-50'>
          <Button
            disabled={isModalLoading}
            size={ButtonSize.sm}
            style={ButtonStyles.branded}
            onClick={onClick}
          >
            {buttonLabel}
          </Button>
        </div>
      ) : null}
    </div>
  )
}

type Props = { place: Place }
const PopupContent = ({ place }: Props) => {
  const { apiBase } = useMapData()
  const [dataLoading, setDataLoading] = useState(true)
  const [data, setData] = useState(null)
  const [isOpen, setModal] = useState<boolean>(false)
  const [isModalLoading, setModalLoading] = useState<boolean>(false)
  const onClickOpen = () => {
    setModalLoading(true)
    setModal(true)
  }
  // Fetch place detail data once
  useEffect(() => {
    if (data) return

    async function fetchData () {
      const response = await fetch(`${apiBase}/places/${place.slug}`)
      const data = await response.json()
      setData(data)
      setDataLoading(false)
    }

    fetchData()
  }, [data, place, dataLoading, apiBase])

  if (dataLoading) return <Loading />

  return (
    <>
      {data ? (
        <PlaceContent
          place={data}
          onClick={onClickOpen}
          isModalLoading={isModalLoading}
        />
      ) : null}
      <SubmissionForm
        isOpen={isOpen}
        closeFn={() => setModal(false)}
        onLoadingFinish={() => setModalLoading(false)}
        place={place}
      />
    </>
  )
}

export default PopupContent